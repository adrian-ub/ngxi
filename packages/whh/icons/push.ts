import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPushIcon],svg[whh-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H64q-27 0-45.5-18.5T0 960V65q0-27 18.5-45.5T64 1h384v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5T768 1024M633 640L454 466q-17-18-42-18t-43 18l-85 85l-88 89q-11 10 1.5 37t34.5 27h88v159q0 14 9 23t23 9h128q13 0 22.5-9t9.5-23V704h84q25 0 38-25.5t-1-38.5M512 0q25 0 44 18l256 257q19 19 19 46H512z"></svg:path>`,
})
export class WhhPushIcon {
  readonly viewBox = input("0 0 831 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
