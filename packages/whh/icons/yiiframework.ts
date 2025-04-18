import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhYiiframeworkIcon],svg[whh-yiiframework-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.488 640q-32-128-64-192q-21-43-32-67.5t-21.5-68t-10.5-88.5q0-57 14.5-102t38-70.5t51-38.5t56.5-13q46 0 83.5 37.5t57 95.5t19.5 123q0 92-54 196t-138 188m-352 384q-4-7-9-21.5t-14-64t-9-106.5q0-50 44-127t102-147q-138-76-274-110q-53-13-95-34.5t-68-43.5t-45-52t-28-52.5t-14-53.5t-5.5-46t-.5-38q0-28 46.5-46t145.5-18q74 0 151 41.5t140 108.5t114 147t79 162.5t28 148.5q0 64-24 122.5t-59 99t-75.5 71t-75 45t-54.5 14.5"></svg:path>`,
})
export class WhhYiiframeworkIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
