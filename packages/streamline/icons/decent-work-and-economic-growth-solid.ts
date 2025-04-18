import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDecentWorkAndEconomicGrowthSolidIcon],svg[streamline-decent-work-and-economic-growth-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.326.28a.5.5 0 0 1 .506-.229l2.571.429a.5.5 0 0 1 .411.575l-.428 2.572a.5.5 0 0 1-.9.208l-.694-.97l-3.574 2.284a.75.75 0 0 1-.974-.144l-1.993-2.33L1.524 4.59a.75.75 0 1 1-.686-1.334l4.255-2.187a.75.75 0 0 1 .913.18L7.96 3.534l2.96-1.892l-.577-.807a.5.5 0 0 1-.017-.555M3.78 5.19L.878 6.85A.75.75 0 0 0 .5 7.5v5.75c0 .414.336.75.75.75h2.53zM5.03 14h3.668V7.188l-1.649.824l-1.648-2.884a.75.75 0 0 0-.37-.324V14Zm7.72 0H9.948V6.563l2.467-1.234A.75.75 0 0 1 13.5 6v7.25a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDecentWorkAndEconomicGrowthSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
