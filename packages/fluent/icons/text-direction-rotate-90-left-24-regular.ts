import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate90Left24RegularIcon],svg[fluent-text-direction-rotate-90-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 21a.75.75 0 0 1-.75-.75V5.56l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v14.69a.75.75 0 0 1-.75.75m4.28-.053l9.496-3.753a.75.75 0 0 0 .104-1.345l-.105-.05l-9.5-3.747a.75.75 0 0 0-.643 1.352l.092.043l2.526.997v4.113l-2.52.995a.75.75 0 0 0-.454.876l.031.097a.75.75 0 0 0 .876.453zm7.178-4.45L14.5 17.964v-2.928zM15.5 11.25a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72z"></svg:path>`,
})
export class FluentTextDirectionRotate90Left24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
