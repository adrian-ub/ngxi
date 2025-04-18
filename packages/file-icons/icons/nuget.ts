import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNugetIcon],svg[file-icons-nuget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.023 70.401H371.2c77.762 0 140.8 63.038 140.8 140.8v152.177c0 77.762-63.038 140.8-140.8 140.8H219.023c-77.761 0-140.8-63.038-140.8-140.8V211.201c0-77.762 63.039-140.8 140.8-140.8m-119.466-12.8c0-38.178-41.613-62.168-74.724-43.08s-33.11 67.07 0 86.16s74.724-4.903 74.724-43.08m142.22 139.377c0-40.377-43.99-65.75-78.991-45.561s-35.002 70.934 0 91.123s78.992-5.184 78.992-45.562M448 363.378c0-69.823-76.092-113.7-136.636-78.788s-60.545 122.665 0 157.576S448 433.201 448 363.378"></svg:path>`,
})
export class FileIconsNugetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
