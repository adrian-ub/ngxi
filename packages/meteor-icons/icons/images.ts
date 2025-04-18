import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsImagesIcon],svg[meteor-icons-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="5" y="1" rx="2"></svg:rect><svg:circle cx="17" cy="7" r="2"></svg:circle><svg:path d="m5 16l6-6l9 9M1 5v13a5 5 0 0 0 5 5h13"></svg:path></svg:g>`,
})
export class MeteorIconsImagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
