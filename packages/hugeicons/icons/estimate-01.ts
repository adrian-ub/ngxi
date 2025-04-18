import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEstimate01Icon],svg[hugeicons-estimate-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8.756V6.8c0-2.263 0-3.394-.775-4.097C16.449 2 15.202 2 12.705 2h-4.41c-2.497 0-3.744 0-4.52.703S3 4.537 3 6.8v6.4c0 2.263 0 3.394.775 4.097c.776.703 2.023.703 4.52.703h4.41M6 6h9m-9 4h1m3 0h1m3 0h1m-9 4h1m3 0h1m9.706 1.004c-.274-.695-.98-1.51-2.586-1.51c-1.866 0-2.652.855-2.811 1.312c-.249.611-.272 1.93 1.989 2.005c2.7.09 3.83.457 3.69 1.937c-.139 1.48-1.695 1.686-2.868 1.766c-1.205-.035-2.695-.287-3.12-1.565M17.994 12v1.436m.009 7.073V22" color="currentColor"></svg:path>`,
})
export class HugeiconsEstimate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
