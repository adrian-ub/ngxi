import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCommentroundtypingemptyIcon],svg[whh-commentroundtypingempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-161 0-293-93q-35 43-93 68T0 1024q25 0 43.5-76.5T64 759Q0 644 0 512q0-139 68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m192.5 448q-26.5 0-45.5-19t-19-45t19-45t45.5-19t45 19t18.5 45t-18.5 45t-45 19m-192 0q-26.5 0-45.5-19t-19-45t19-45t45-19t45 19t19 45.5t-18.5 45t-45 18.5m-192 0q-26.5 0-45.5-18.5T256 512t19-45.5t45.5-18.5t45 19t18.5 45.5t-18.5 45t-45 18.5"></svg:path>`,
})
export class WhhCommentroundtypingemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
