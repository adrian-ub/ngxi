import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindPower02Icon],svg[hugeicons-wind-power-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M4 2.85a2.78 2.78 0 0 1 4 0l3.593 3.683a2.5 2.5 0 0 0-2.05 2zm16 12.3a2.78 2.78 0 0 1-4 0l-3.593-3.683a2.5 2.5 0 0 0 2.05-2zm0-12.3a2.78 2.78 0 0 0-4 0l-3.593 3.683a2.5 2.5 0 0 1 2.05 2zM4 15.15a2.78 2.78 0 0 0 4 0l3.594-3.683a2.5 2.5 0 0 1-2.05-2zm9.45.85l.32 2.521c.226 1.604.34 2.406.085 2.942C13.6 22 13.107 22 12.12 22h-.24c-.987 0-1.48 0-1.735-.537c-.254-.536-.141-1.338.085-2.942L10.55 16"></svg:path></svg:g>`,
})
export class HugeiconsWindPower02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
