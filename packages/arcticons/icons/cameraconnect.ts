import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCameraconnectIcon],svg[arcticons-cameraconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.626" cy="24.179" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.863" cy="30.333" r="3.015" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.044 25.627a4.86 4.86 0 0 1 3.53 3.544"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.194 24.144v13.568a1.844 1.844 0 0 0 1.844 1.842h11.484c3.687 1.861 7.326 2.095 10.896 0h5.239a1.844 1.844 0 0 0 1.843-1.842v-13.6"></svg:path><svg:ellipse cx="30.776" cy="30.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="8.002" ry="7.958"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24.111c-.164-3.673-4.205-3.397-5.436-3.76c0 0-2.73-4.259-3.805-4.328a52.5 52.5 0 0 0-7.134-.095c-1.37.145-3.425 4.233-3.425 4.233l-2.187.19a4.12 4.12 0 0 0-2.758-.856c-1.331.165-2.657 2.027-3.187 2.093c-1.535.19-3.364 1.033-3.374 2.523m1.844-17.15A9.543 9.543 0 0 1 4.5 16.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.093 6.961A13.6 13.6 0 0 1 4.5 20.555M9.85 6.961a5.353 5.353 0 0 1-5.35 5.35"></svg:path>`,
})
export class ArcticonsCameraconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
