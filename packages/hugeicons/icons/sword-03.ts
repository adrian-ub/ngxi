import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSword03Icon],svg[hugeicons-sword-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.987 9.492L5.678 7.514C4.155 6.204 4.15 4.302 3.988 3.02c1.666.08 2.956.23 4.08 1.18l1.176 1.336l1.273 1.428m8.941 11.455l-2.964-3m-2.471 3c.022-.272.2-.978 1.019-1.734c.734-.679 2.327-2.305 3.042-3.01c.406-.4 1.07-.68 1.374-.679m-3.889-.187l1.337 1.479m-3.229.15l1.495 1.313m5.29 2.23c.83.002 1.54.615 1.538 1.445c-.001.83-.707 1.557-1.538 1.556c-.83-.002-1.47-.732-1.469-1.562c.054-.826.665-1.328 1.47-1.439m-15.867.412l2.958-2.892m-2.992-2.514c.273.022 1.032.204 1.712 1.054c.625.78 2.31 2.29 3.017 3.004c.4.404.68 1.044.68 1.348M7.266 14.23l8.239-9.566c1.34-1.496 3.214-1.528 4.5-1.666c-.112 1.664-.288 2.95-1.26 4.055L8.55 15.927m-3.543 3.572a1.503 1.503 0 1 1-3.006 0a1.503 1.503 0 0 1 3.006 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSword03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
