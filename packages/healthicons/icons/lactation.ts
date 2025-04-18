import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLactationIcon],svg[healthicons-lactation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 34.758c0-.62.362-1.298.731-1.826c.381-.546.769-.932.769-.932s.388.386.769.932c.369.528.731 1.205.731 1.826c0 .796-.672 1.442-1.5 1.442s-1.5-.646-1.5-1.442m1 6.838c0-1.034.604-2.162 1.218-3.042A13 13 0 0 1 35.5 37s.646.644 1.282 1.554c.614.88 1.218 2.008 1.218 3.042C38 42.924 36.88 44 35.5 44S33 42.924 33 41.596m-9.304-25.709c4.513 5.3 9.146 10.741 8.173 13.89c-.341 1.109-.98 2.217-1.827 3.253L30 33l-.204.262l-.344.443c-1.606 1.722-3.766 3.182-6.013 4.006c-2.265.262-4.928-.176-8.016-1.617l-.846 1.812q1.77.824 3.423 1.279V44h-8V4h5.958c0 2.799 3.824 7.29 7.738 11.887"></svg:path><svg:path d="M30 27h2a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class HealthiconsLactationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
