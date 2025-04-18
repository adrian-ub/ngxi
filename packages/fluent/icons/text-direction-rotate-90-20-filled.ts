import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate9020FilledIcon],svg[fluent-text-direction-rotate-90-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M17 6.5a.75.75 0 0 0-.471-.696l-7.5-3a.75.75 0 0 0-.557 1.393l2.028.811v2.984l-2.028.812a.75.75 0 0 0 .557 1.393l7.5-3A.75.75 0 0 0 17 6.5zm-2.77 0L12 7.392V5.608l2.23.892z" fill="currentColor"></svg:path><svg:path d="M5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V3.75z" fill="currentColor"></svg:path><svg:path d="M13 10.75a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.748.748 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.69z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTextDirectionRotate9020FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
