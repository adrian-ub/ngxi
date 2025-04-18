import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoPresentIcon],svg[hugeicons-co-present-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.59 18.177a3 3 0 0 1-.418-.349C2 16.657 2 14.771 2 11s0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11s0 5.657-1.172 6.828q-.194.195-.418.349"></svg:path><svg:path d="M8.686 16.926c-.864.527-3.131 1.602-1.75 2.947C7.61 20.53 8.36 21 9.306 21h5.389c.944 0 1.695-.47 2.37-1.127c1.38-1.345-.887-2.42-1.751-2.947a6.39 6.39 0 0 0-6.628 0M14.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsCoPresentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
