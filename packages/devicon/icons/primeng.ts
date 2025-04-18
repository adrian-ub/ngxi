import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPrimengIcon],svg[devicon-primeng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="deviconPrimeng0" maskUnits="userSpaceOnUse"><svg:path fill="#fff" stroke-width="2.119" d="M28.3 0L.073 10.026l4.305 37.176L28.3 60.4l23.92-13.198l4.305-37.176Z"></svg:path></svg:mask></svg:defs><svg:path fill="#dd0031" d="M64 0L4.181 21.248l9.124 78.784L64 128l50.695-27.968l9.124-78.784Z"></svg:path><svg:path fill="#c3002f" fill-rule="evenodd" d="M28.3 0v6.704v-.03V60.4l23.922-13.197l4.305-37.177Z" clip-rule="evenodd" mask="url(#deviconPrimeng0)" transform="translate(4.027)scale(2.1192)"></svg:path><svg:path fill="#fff" d="m44.553 22.463l-8.926 8.924l13.389 1.275l4.463-10.2h-8.926zm10.84 0l-5.08 12.06l-22.975-1.86l3.826 15.933L58.58 58.795h3.826V22.463zm9.564 0v36.332h4.463l27.416-10.2l3.826-15.933l-23.611 1.863l-5.08-12.062zm8.926 0l4.463 10.2l13.39-1.276l-8.927-8.924zM31.8 51.146v21.67l15.303 12.748v-19.76l4.462-6.372l-5.738 1.275l-7.014-7.012zm63.76 0l-7.014 2.55l-7.014 7.011l-5.738-1.275l4.465 6.373v19.76l15.3-12.749zm-41.522 8.192l-5.086 7.664v28.74l3.815 5.748l4.45 4.47h12.716l4.45-4.47l3.815-5.748v-28.74l-5.086-7.664l-3.18 1.916H57.22l-3.18-1.916zM38.814 81.102v8.287l8.29 8.285v-9.56zm49.733 0l-8.287 7.011v9.56l8.287-8.284z"></svg:path>`,
})
export class DeviconPrimengIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
