import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBacteriaNegativeIcon],svg[healthicons-bacteria-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBacteriaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 8.022a7.4 7.4 0 0 1 4.953 2.44l2.168-2.169l1.414 1.414l-2.44 2.44c.488.99.762 2.104.762 3.282a9.67 9.67 0 0 0 2.175 6.125l2.26-2.261l1.415 1.414l-2.261 2.261a9.67 9.67 0 0 0 6.125 2.175c.656 0 1.291.085 1.896.244l1.667-2.887l1.732 1l-1.537 2.662A7.43 7.43 0 0 1 40 32.572c0 1.087-.234 2.12-.654 3.05l2.618 1.512l-1 1.732l-2.679-1.547A7.41 7.41 0 0 1 32.571 40q-.285 0-.571-.007V43h-2v-3.133a24.4 24.4 0 0 1-8.606-2.55l-1.528 2.647l-1.732-1l1.518-2.63a24.7 24.7 0 0 1-5.312-4.432l-2.633 2.634l-1.414-1.415l2.762-2.762a24.5 24.5 0 0 1-3.801-7.16L6.259 24l-.518-1.932l2.96-.793A24.6 24.6 0 0 1 8 15.43c0-.681.092-1.34.263-1.967L5.5 11.866l1-1.732l2.556 1.476A7.44 7.44 0 0 1 14 8.137V5h2zM14 16a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m8 17a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m13 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBacteriaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBacteriaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
