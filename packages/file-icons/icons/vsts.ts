import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsVstsIcon],svg[file-icons-vsts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m68.461 273.018l-38.625-8.002v-83.319l27.711-35.411l104.67-39.318V74.379l82.558 66.837l-176.314 36.386zm176.314-131.802l76.846-13.062l1.536 175.13l-69.642 59.284l-112.145-37.54v37.145l-72.91-89.155l177.373 24.634zM0 381.646l387.44 57.935L384.543 0L512 55.762v401.924L385.267 512z"></svg:path>`,
})
export class FileIconsVstsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
