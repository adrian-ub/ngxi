import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSvnIcon],svg[file-icons-svn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 200.093c-146.988 8.553-366.786 48.059-380.439 18.253C127.278 181.962 363.655 117.21 512 97.842zM0 299.653v110.608c161.463-19.058 423.402-90.818 409.523-126.903C394.83 248.491 144.984 294.122 0 299.654m493.867-230.41H0v134.72c122.23-49.787 329.9-103.877 493.867-134.72M26.077 442.757H512V309.12c-139.957 55.892-358.784 113-485.924 133.637"></svg:path>`,
})
export class FileIconsSvnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
