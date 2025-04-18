import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epWatermelonIcon],svg[ep-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m683.072 600.32l-43.648 162.816l-61.824-16.512l53.248-198.528L576 493.248l-158.4 158.4l-45.248-45.248l158.4-158.4l-55.616-55.616l-198.528 53.248l-16.512-61.824l162.816-43.648L282.752 200A384 384 0 0 0 824 741.248zm231.552 141.056a448 448 0 1 1-632-632z"></svg:path>`,
})
export class EpWatermelonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
