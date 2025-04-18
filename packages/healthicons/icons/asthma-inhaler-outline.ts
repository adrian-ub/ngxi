import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAsthmaInhalerOutlineIcon],svg[healthicons-asthma-inhaler-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.331 6.741a1 1 0 0 0-1.225-.707L7.38 8.104a1 1 0 0 0-.707 1.225l1.506 5.622l-1.074.489a1 1 0 0 0-.55 1.174l5.675 20.708A5 5 0 0 0 17.051 41H30a1 1 0 0 0 1-1v-1h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-3v-1a1 1 0 0 0-1-1h-6.17l-4.273-15.947a1 1 0 0 0-1.38-.651l-.771.35zM8.707 16.907l9.224-4.196l4.166 15.548a1 1 0 0 0 .966.741H29v10H17.051a3 3 0 0 1-2.893-2.207zm6.853-5.315l-5.536 2.52l-1.161-4.334l5.795-1.553zM31 37v-6h2v6z" clip-rule="evenodd"></svg:path><svg:path d="M42 31a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HealthiconsAsthmaInhalerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
