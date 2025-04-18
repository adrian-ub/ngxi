import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsKustoAltIcon],svg[file-icons-kusto-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 71.01v378.358l286.526 46.916V15.716zm167.559 274.238l-55.853-84.94v84.94H69.258V168.753h42.448v81.173l55.853-81.173h46.916l-61.438 86.246l73.447 90.25zm137.29-263.087v120.467h30.683v191.854h-30.684v40.251H512V82.161zm95.421 312.32h-49.855V258.774h49.855zm67.598 0h-52.407V144.74h52.407z"></svg:path>`,
})
export class FileIconsKustoAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
