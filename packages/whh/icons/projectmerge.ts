import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhProjectmergeIcon],svg[whh-projectmerge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024q-39 0-70.5-21t-46.5-55q-141-28-260-117.5t-199-225.5v181q29 17 46.5 46t17.5 64q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.338 896q0-35 17.5-64t46.5-46V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 33-15.5 61t-41.5 45q28 223 157 384.5t309 201.5q39-52 103-52q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-640.5-64q26.5 0 45.5-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5t18.5 45t45 18.5m0-896q-26.5 0-45 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-19-45t-45.5-18.5m640 768q-26.5 0-45 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhProjectmergeIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
