import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLinkedinSolidIcon],svg[bubbles-linkedin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.656 2H4.344A2.347 2.347 0 0 0 2 4.344v11.312A2.347 2.347 0 0 0 4.344 18h11.312A2.347 2.347 0 0 0 18 15.656V4.344A2.347 2.347 0 0 0 15.656 2m-8 12.688H5.781V8.125h1.875zm0-7.5H5.781V5.313h1.875zm6.563 7.5h-1.875v-3.75a.939.939 0 0 0-1.875 0v3.75H8.594V8.125h1.875v.353c.491-.152.81-.353 1.406-.353c1.272.001 2.344 1.142 2.344 2.49z"></svg:path>`,
})
export class BubblesLinkedinSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
