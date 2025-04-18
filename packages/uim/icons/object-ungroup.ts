import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimObjectUngroupIcon],svg[uim-object-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4M4 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m10 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-2.002" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 22a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m10 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-2.002"></svg:path><svg:path fill="currentColor" d="M12.278 5a1.94 1.94 0 0 1 0-2H5.722a1.94 1.94 0 0 1 0 2zM4 12a2 2 0 0 1 1 .278V5.722a1.94 1.94 0 0 1-2 0v6.556A2 2 0 0 1 4 12" opacity=".25"></svg:path><svg:path fill="currentColor" d="M20 18a2 2 0 0 1 1 .278v-6.556a1.94 1.94 0 0 1-2 0v6.556A2 2 0 0 1 20 18m-10 0a2 2 0 0 1 1 .278v-6.556a1.94 1.94 0 0 1-2 0v6.556A2 2 0 0 1 10 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.278 13H11v2h1.278a1.94 1.94 0 0 1 0-2M9 15v-2H5.722a1.94 1.94 0 0 1 0 2z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M18.278 19h-6.556a1.94 1.94 0 0 1 0 2h6.556a1.94 1.94 0 0 1 0-2m0-8a1.94 1.94 0 0 1 0-2h-6.556a1.94 1.94 0 0 1 0 2z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 9V5.722a1.94 1.94 0 0 1-2 0V9zm-2 2v1.278a1.94 1.94 0 0 1 2 0V11z" opacity=".25"></svg:path>`,
})
export class UimObjectUngroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
