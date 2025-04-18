import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCloudyFilledIcon],svg[lsicon-cloudy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.282 4.068C5.996 3.37 6.948 3 8 3s2.004.37 2.718 1.068c.712.697 1.157 1.69 1.26 2.89a.07.07 0 0 0 .02.043a.1.1 0 0 0 .048.023c1.153.106 1.929.562 2.395 1.257c.448.668.559 1.484.559 2.219c0 .95-.49 1.599-1.11 1.986c-.598.374-1.322.514-1.89.514H4c-.568 0-1.292-.14-1.89-.514C1.49 12.1 1 11.452 1 10.5c0-1.192.413-2.033 1.02-2.591c.591-.544 1.323-.78 1.91-.866a.12.12 0 0 0 .067-.035a.1.1 0 0 0 .026-.05c.102-1.2.547-2.193 1.26-2.89" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCloudyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
