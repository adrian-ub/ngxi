import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapRoutePlanningIcon],svg[tdesign-map-route-planning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3 3 0 0 0-3 3c0 1.237.782 2.498 1.738 3.544c.456.498.914.908 1.262 1.195a13 13 0 0 0 1.262-1.195C14.218 9.498 15 8.238 15 7a3 3 0 0 0-3-3m0 10.214c-.258-.178-.519-.35-.77-.537a14.6 14.6 0 0 1-1.968-1.784C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a14.6 14.6 0 0 1-1.968 1.784c-.251.187-.512.36-.77.537m0-6.964a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M2 10h3v2h-.634l.868 1.419L4 14.174V20h16v-6.248l-.783-1.035l.68-.514l.103.137V12h-2v-2h4v12H2zm2 2.194L4.317 12H4zm14.654 3.607l-.879.478q-.663.36-1.366.635l-.728-1.863q.585-.228 1.139-.53l.878-.477zm-11.318.974a12 12 0 0 1-1.346-.677l1.008-1.727q.543.317 1.123.564l.92.392l-.785 1.84zm6.303.897l-.999.05q-.753.037-1.507-.02l.152-1.994q.627.048 1.255.016l1-.05z"></svg:path>`,
})
export class TdesignMapRoutePlanningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
