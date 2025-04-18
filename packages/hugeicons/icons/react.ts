import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReactIcon],svg[hugeicons-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 12C8 6.477 9.79 2 12 2s4 4.477 4 10s-1.79 10-4 10s-4-4.477-4-10"></svg:path><svg:path d="M9.975 8.62c4.842-2.762 9.674-3.45 10.792-1.537s-1.9 5.703-6.742 8.464s-9.674 3.45-10.792 1.536c-1.118-1.913 1.9-5.702 6.742-8.464"></svg:path><svg:path d="M14.025 8.62c4.842 2.76 7.86 6.55 6.742 8.463c-1.118 1.914-5.95 1.226-10.792-1.536s-7.86-6.55-6.742-8.464C4.35 5.17 9.183 5.858 14.025 8.62"></svg:path><svg:path d="M13.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsReactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
