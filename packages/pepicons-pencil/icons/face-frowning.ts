import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFaceFrowningIcon],svg[pepicons-pencil-face-frowning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.75 17.5a7.75 7.75 0 1 0 0-15.5a7.75 7.75 0 0 0 0 15.5m0 1a8.75 8.75 0 1 0 0-17.5a8.75 8.75 0 0 0 0 17.5" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M12.343 13.79a.5.5 0 0 0 .819-.573l-.412.283l.412-.284l-.002-.002l-.002-.003l-.004-.006l-.013-.018l-.04-.05a2 2 0 0 0-.143-.152a3 3 0 0 0-.558-.417C11.89 12.272 11.116 12 10 12s-1.89.272-2.4.568a3 3 0 0 0-.558.417a2 2 0 0 0-.183.202l-.013.018l-.004.006l-.002.003l-.001.002l.411.284l-.412-.283a.5.5 0 1 0 .83.56a1 1 0 0 1 .07-.074c.07-.068.188-.168.365-.27c.35-.205.95-.433 1.897-.433c.946 0 1.547.228 1.897.432c.177.103.295.203.365.27a1 1 0 0 1 .08.088" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilFaceFrowningIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
