import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintMoveYIcon],svg[pepicons-print-move-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".2"><svg:path d="M6.348 8.294A1.5 1.5 0 0 1 6.54 6.18l4-3.333a1.5 1.5 0 0 1 1.92 2.304l-4 3.334a1.5 1.5 0 0 1-2.112-.192"></svg:path><svg:path d="M16.652 8.294a1.5 1.5 0 0 1-2.112.192l-4-3.334a1.5 1.5 0 0 1 1.92-2.304l4 3.333a1.5 1.5 0 0 1 .192 2.113"></svg:path><svg:path d="M11.5 4.5A1.5 1.5 0 0 1 13 6v8a1.5 1.5 0 0 1-3 0V6a1.5 1.5 0 0 1 1.5-1.5"></svg:path><svg:path d="M16.652 13.707a1.5 1.5 0 0 1-.192 2.112l-4 3.333a1.5 1.5 0 0 1-1.92-2.304l4-3.333a1.5 1.5 0 0 1 2.112.191"></svg:path><svg:path d="M6.348 13.707a1.5 1.5 0 0 1 2.112-.193l4 3.334a1.5 1.5 0 1 1-1.92 2.305l-4-3.334a1.5 1.5 0 0 1-.192-2.113"></svg:path><svg:path d="M11.5 17.5A1.5 1.5 0 0 1 10 16V8a1.5 1.5 0 0 1 3 0v8a1.5 1.5 0 0 1-1.5 1.5"></svg:path></svg:g><svg:path d="M5.616 6.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064"></svg:path><svg:path d="M14.384 6.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704M10 4.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m4.384 8.847a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064"></svg:path><svg:path d="M5.616 13.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704"></svg:path><svg:path d="M10 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"></svg:path></svg:g>`,
})
export class PepiconsPrintMoveYIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
