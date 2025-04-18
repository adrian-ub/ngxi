import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileEditIcon],svg[hugeicons-file-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.054 11V7.817c0-1.693 0-2.54-.268-3.216c-.433-1.088-1.347-1.945-2.506-2.35c-.72-.253-1.623-.253-3.428-.253c-3.159 0-4.738 0-6 .441c-2.027.71-3.627 2.21-4.383 4.114c-.47 1.183-.47 2.665-.47 5.629v2.545c-.001 3.07-.001 4.605.85 5.671c.243.306.532.577.858.805c1.048.737 2.522.794 5.314.798"></svg:path><svg:path d="M3 11.979c0-1.84 1.58-3.314 3.421-3.314c.666 0 1.45.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.179c.173-.647.056-1.432.056-2.098a3.333 3.333 0 0 1 3.334-3.333m6.789 12.485l.688.684a1.477 1.477 0 0 1 0 2.096l-3.603 3.651a2 2 0 0 1-1.04.546l-2.232.482a.495.495 0 0 1-.59-.586l.474-2.209c.074-.392.265-.752.548-1.034l3.648-3.63a1.495 1.495 0 0 1 2.107 0"></svg:path></svg:g>`,
})
export class HugeiconsFileEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
