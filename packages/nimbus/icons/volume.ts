import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusVolumeIcon],svg[nimbus-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.32 7.45h-2v1.06h2V8a5 5 0 0 0 0-.55M12.91 11l1.56.37a6.3 6.3 0 0 0 .45-1L13.16 10zm2-5.43a6.3 6.3 0 0 0-.45-1l-1.55.34l.25 1zm-4.29-3.06L1.9 6.3v-.69H.65v4.78H1.9v-.71l8.72 3.79v1h1.25V1.5h-1.25zM1.9 8.32v-.65l8.72-3.8v8.24z"></svg:path>`,
})
export class NimbusVolumeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
