import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFaceFrowningCircleFilledIcon],svg[pepicons-pencil-face-frowning-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilFaceFrowningCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M12.75 20.5a7.75 7.75 0 1 0 0-15.5a7.75 7.75 0 0 0 0 15.5m0 1a8.75 8.75 0 1 0 0-17.5a8.75 8.75 0 0 0 0 17.5" clip-rule="evenodd"></svg:path><svg:path d="M11.5 10.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M15.343 16.79a.5.5 0 0 0 .819-.573l-.412.283l.412-.284l-.002-.002l-.002-.002l-.004-.007l-.013-.018l-.04-.05a2 2 0 0 0-.143-.152a3 3 0 0 0-.558-.417C14.89 15.272 14.116 15 13 15s-1.89.272-2.4.568a3 3 0 0 0-.558.417a2 2 0 0 0-.183.202l-.013.018l-.004.007l-.002.002l-.001.002l.411.284l-.412-.283a.5.5 0 1 0 .83.56a1 1 0 0 1 .07-.074c.07-.068.188-.168.365-.27c.35-.205.95-.433 1.897-.433c.946 0 1.547.228 1.897.432c.177.103.295.203.365.27a1 1 0 0 1 .08.088" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilFaceFrowningCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilFaceFrowningCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
