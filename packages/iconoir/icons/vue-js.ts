import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirVueJsIcon],svg[iconoir-vue-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 20.5L22.5 4h-4L12 14L5.5 4h-4z"></svg:path><svg:path d="M18.5 4h-4L12 7.5L9.5 4h-4"></svg:path></svg:g>`,
})
export class IconoirVueJsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
