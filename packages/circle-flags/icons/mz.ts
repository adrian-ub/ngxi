import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMzIcon],svg[circle-flags-mz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMz0)"><svg:path fill="#eee" d="m99 136.8l413 20v31.5l-35.9 66.1l36.2 68.4l-.3 32.4l-413 22z"></svg:path><svg:path fill="#496e2d" d="M512 156.8V0H0l122 156.8z"></svg:path><svg:path fill="#333" d="M167 188.3v134.5h345.3l-.3-134.5z"></svg:path><svg:path fill="#ffda44" d="M512 355.2V512H0l122-156.8z"></svg:path><svg:path fill="#a2001d" d="M0 0v512l256-256z"></svg:path><svg:path fill="#ffda44" d="m103.6 189.2l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6H87z"></svg:path><svg:path fill="#eee" d="M55.1 256h97v44.5h-97z"></svg:path><svg:path fill="#333" d="m170.5 205l-15.7-15.8l-51.2 51.2l-51.1-51.2L36.7 205L88 256l-51.2 51.3l15.8 15.5l51.1-51l51.2 51l15.7-15.5l-51.2-51.2z"></svg:path></svg:g>`,
})
export class CircleFlagsMzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
