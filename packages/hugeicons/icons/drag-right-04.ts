import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight04Icon],svg[hugeicons-drag-right-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.998 13.053v.173m0 0a1.8 1.8 0 0 0-1.52-1.765l-1.208-.198v.895m2.728 1.068v2.213c0 1.944 0 2.916-.301 3.69a4.5 4.5 0 0 1-2.607 2.574c-.784.297-1.769.297-3.738.297c-1.033 0-1.55 0-2.03-.104a4.55 4.55 0 0 1-1.984-.98c-.373-.317-.683-.725-1.303-1.54l-2.73-3.596a1.5 1.5 0 0 1 .029-1.854a1.547 1.547 0 0 1 2.281-.125l1.383 1.455V6.5a1.5 1.5 0 1 1 3 0v2.974m5.272 2.684c0-.988-.814-1.79-1.818-1.79h-.909v.895m2.727.895v.895m-5.272-3.58h.727c1.004 0 1.818.802 1.818 1.79m-2.545-1.79v2.685m2.545-.895v.895"></svg:path><svg:path d="M11.436 9.5a4 4 0 1 0-3.876 0m10.458-5.504l1.744 1.44c.255.272.297.477.172.779a.8.8 0 0 1-.212.28l-1.704 1.51M13.851 5.98h4.984"></svg:path></svg:g>`,
})
export class HugeiconsDragRight04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
