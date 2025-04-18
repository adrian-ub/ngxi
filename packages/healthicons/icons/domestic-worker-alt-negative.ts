import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDomesticWorkerAltNegativeIcon],svg[healthicons-domestic-worker-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsDomesticWorkerAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16.5 13a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m12.949 3.05A2 2 0 0 0 29 16h-9v12h-7V16h-1a6 6 0 0 0-1 11.917V40a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V20h7c.477 0 .914-.167 1.258-.445l1.998 8.654a4 4 0 0 0-2.998 4.798l1.05 8.994l2.824-.652l-1.03-4.914l1.958-.41l1.021 4.874l6.92-1.597l-2.999-8.545a4 4 0 0 0-4.797-2.997L30.38 11.195a1 1 0 0 0-1.95.45zM18 19v-3h-3v3zm-7 1a2 2 0 1 0 0 4zm21.706 10.158l1.949-.45a2 2 0 0 1 2.398 1.5l-5.846 1.349a2 2 0 0 1 1.499-2.399" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDomesticWorkerAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDomesticWorkerAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
