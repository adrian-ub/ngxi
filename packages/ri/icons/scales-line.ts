import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riScalesLineIcon],svg[ri-scales-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2zm-8 4.343l2.828 2.829a4 4 0 1 1-5.657 0zm14 0l2.828 2.829a4 4 0 1 1-5.657 0zm-14 2.829l-1.414 1.414a2 2 0 1 0 2.828 0zm14 0l-1.414 1.414a2 2 0 1 0 2.828 0z"></svg:path>`,
})
export class RiScalesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
