import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebflowIcon],svg[hugeicons-webflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.233 15.295L22 5.5h-.396a5 5 0 0 0-4.744 3.419L15 14.5l-1-9h-.08a5 5 0 0 0-4.66 3.188L7 14.5l-.558-5.024A4.47 4.47 0 0 0 2 5.5l3 13c2.084 0 3.985-1.293 4.717-3.244L11.5 10.5l1.5 8h.566a5 5 0 0 0 4.667-3.205" color="currentColor"></svg:path>`,
})
export class HugeiconsWebflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
