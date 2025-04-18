import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherSunPhotosLightCameraModeBrightnessSunPhotoFullIcon],svg[streamline-interface-weather-sun-photos-light-camera-mode-brightness-sun-photo-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="2.5"></svg:circle><svg:path d="m13.5 7l-2.34 1.72l.44 2.88l-2.88-.44L7 13.5l-1.72-2.34l-2.88.44l.44-2.88L.5 7l2.34-1.72L2.4 2.4l2.88.44L7 .5l1.72 2.34l2.88-.44l-.44 2.88L13.5 7z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceWeatherSunPhotosLightCameraModeBrightnessSunPhotoFullIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
