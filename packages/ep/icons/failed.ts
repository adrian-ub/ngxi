import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epFailedIcon],svg[ep-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m557.248 608l135.744-135.744l-45.248-45.248l-135.68 135.744l-135.808-135.68l-45.248 45.184L466.752 608l-135.68 135.68l45.184 45.312L512 653.248l135.744 135.744l45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384zm-320 0V96h256v96z"></svg:path>`,
})
export class EpFailedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
