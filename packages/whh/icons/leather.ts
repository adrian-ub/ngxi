import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLeatherIcon],svg[whh-leather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896q-88 0-140 38.5t-52 89.5H448q0-51-52-89.5T256 896q-25 0-65.5 21T128 960L0 832q71-37 131.5-130T192 512q0-147-128-256l64-128q7 7 19.5 17.5T194 174t62 18q59 0 104-30t66.5-73T448 0h128q0 46 21.5 89t66.5 73t104 30q28 0 60-16t50-32l18-16l64 128Q832 365 832 512q0 97 60.5 190T1024 832L896 960q-26-25-64-44.5T768 896"></svg:path>`,
})
export class WhhLeatherIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
