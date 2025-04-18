import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRepeatCircleLineIcon],svg[majesticons-repeat-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 8l2-2M8 8l2 2M8 8h6a2 2 0 0 1 2 2v1m0 5l-2 2m2-2l-2-2m2 2h-6a2 2 0 0 1-2-2v-1"></svg:path><svg:circle r="10" transform="matrix(-1 0 0 1 12 12)"></svg:circle></svg:g>`,
})
export class MajesticonsRepeatCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
