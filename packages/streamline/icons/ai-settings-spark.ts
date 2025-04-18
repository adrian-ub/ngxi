import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiSettingsSparkIcon],svg[streamline-ai-settings-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.92 2.57h-.687a.84.84 0 0 0-.78.537l-.36.93l-1.24.703l-.988-.15a.84.84 0 0 0-.838.41l-.335.587a.84.84 0 0 0 .067.946l.628.78V8.72l-.611.78a.84.84 0 0 0-.067.946l.335.586a.84.84 0 0 0 .838.411l.988-.15l1.223.703l.36.93a.84.84 0 0 0 .78.536h.704a.84.84 0 0 0 .779-.536l.36-.93l1.223-.704l.989.151a.84.84 0 0 0 .838-.41l.335-.587a.84.84 0 0 0-.067-.947l-.629-.779v-.907m-5.864.203a1.676 1.676 0 1 0 3.351 0a1.676 1.676 0 0 0-3.351 0M8.1 3.542c-.306-.053-.306-.494 0-.547A2.78 2.78 0 0 0 10.34.85l.018-.085c.067-.303.499-.305.568-.002l.023.098a2.79 2.79 0 0 0 2.244 2.131c.309.054.309.497 0 .55a2.79 2.79 0 0 0-2.244 2.131l-.023.099c-.069.303-.501.3-.568-.003l-.018-.084a2.78 2.78 0 0 0-2.238-2.144Z"></svg:path>`,
})
export class StreamlineAiSettingsSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
