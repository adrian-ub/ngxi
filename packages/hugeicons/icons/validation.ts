import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsValidationIcon],svg[hugeicons-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m17.603 8.583l1.212-.808c.641-.427 1.419-.634 2.056-1.067q.199-.135.375-.31a2.576 2.576 0 1 0-3.953-3.269c-.433.637-.64 1.415-1.067 2.056l-.808 1.212m2.185 2.186l-2.185-2.186m2.185 2.186l1.698 2.669a1.98 1.98 0 0 1-.27 2.46a.99.99 0 0 1-1.398 0L10.29 6.369a.99.99 0 0 1 0-1.399a1.98 1.98 0 0 1 2.46-.27l2.668 1.698M16 16.894A7.148 7.148 0 1 1 7.106 8"></svg:path><svg:path d="M7 15.667s.625 0 1.25 1.333c0 0 1.985-3.333 3.75-4"></svg:path></svg:g>`,
})
export class HugeiconsValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
