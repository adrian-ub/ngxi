import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacetimeIcon],svg[lineicons-facetime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.497v7.006a2.77 2.77 0 0 0 2.767 2.766h8.43a2.77 2.77 0 0 0 2.766-2.766V8.497a2.77 2.77 0 0 0-2.767-2.767H4.772A2.766 2.766 0 0 0 2 8.497m18.188-1.875L17.013 9.24c-.283.235-.446.58-.446.945v3.625c0 .364.159.705.437.94l3.174 2.666c.724.604 1.822.091 1.822-.849V7.476c.005-.935-1.088-1.453-1.812-.854"></svg:path>`,
})
export class LineiconsFacetimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
