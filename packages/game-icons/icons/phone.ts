import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPhoneIcon],svg[game-icons-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.738 311.468c8.07-42.15 99.697-131.543 138.247-138.247c11.314 11.314 33.94 33.942 56.57 33.942l79.195-79.196c0-22.628-35.103-49.413-56.57-56.57C272.583 32.865 32.865 272.583 71.398 388.182c7.156 21.467 33.94 56.57 56.57 56.57l79.195-79.196c0-22.628-25.11-42.772-36.424-54.086z"></svg:path>`,
})
export class GameIconsPhoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
