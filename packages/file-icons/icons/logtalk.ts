import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsLogtalkIcon],svg[file-icons-logtalk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76.14 422.043H0V90.288h76.14v23.246H33.209v281.942h42.93zM434.793 89.957v23.246h43.998v282.273h-43.998v26.567H512V89.957zm-73.435 213.78l-.071-16.604l-190.502.802V248.5l190.57-.802l-.072-16.604l-190.498.802v-72.201H154.18V372.23h16.605v-67.69z"></svg:path>`,
})
export class FileIconsLogtalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
