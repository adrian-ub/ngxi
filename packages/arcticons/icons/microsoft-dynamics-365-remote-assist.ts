import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftDynamics365RemoteAssistIcon],svg[arcticons-microsoft-dynamics-365-remote-assist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23 13.518l-7.578 4.375a2 2 0 0 0-1 1.732v8.75a2 2 0 0 0 1 1.733L23 34.483a2 2 0 0 0 2 0l7.578-4.375a2 2 0 0 0 1-1.733v-8.75a2 2 0 0 0-1-1.732L25 13.518a2 2 0 0 0-2 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23 2.768l-16.887 9.75a2 2 0 0 0-1 1.732v19.5a2 2 0 0 0 1 1.732L23 45.232a2 2 0 0 0 2 0l16.887-9.75a2 2 0 0 0 1-1.732v-19.5a2 2 0 0 0-1-1.732L25 2.768a2 2 0 0 0-2 0M14.422 19.78l-9.309 5.375m28.465 3.065l9.309-5.375"></svg:path>`,
})
export class ArcticonsMicrosoftDynamics365RemoteAssistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
