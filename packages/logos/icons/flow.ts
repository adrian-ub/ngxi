import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFlowIcon],svg[logos-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCA20" d="m237.3 115.092l-88.81-88.8h88.81z" opacity=".7"></svg:path><svg:path fill="#FFCA20" d="M86.287 0h50.345l38.476 38.466H86.287z" opacity=".7"></svg:path><svg:path fill="#FFCF39" d="M89.17 88.821L.359 0h106.782v88.81zm78.02 88.8L256 266.432h-88.81z" opacity=".9"></svg:path><svg:path fill="#FFE490" d="m107.14 177.632l-88.8-88.821h88.811v88.81zm95.643-44.95l-70.797-70.839h70.829zm8.278 125.483l-80.543-80.533h80.543z" opacity=".7"></svg:path><svg:path fill="#FCBC7C" d="M107.141 70.744L36.396 0h70.745z" opacity=".9"></svg:path><svg:path fill="#F9A040" d="m130.877 177.621l88.811 88.811h-88.811z" opacity=".8"></svg:path><svg:path fill="#F9A040" d="m220.765 213.078l-88.695-88.694h88.695z" opacity=".7"></svg:path><svg:path fill="#FFCF39" d="m131.986 61.843l87.734 87.734h-87.734z" opacity=".9"></svg:path><svg:path fill="#FFC737" d="M107.141 266.084L0 158.922h107.141z" opacity=".7"></svg:path>`,
})
export class LogosFlowIcon {
  readonly viewBox = input("0 0 256 267")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
