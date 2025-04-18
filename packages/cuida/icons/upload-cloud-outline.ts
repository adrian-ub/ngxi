import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaUploadCloudOutlineIcon],svg[cuida-upload-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="upload-cloud-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M12.26 3.028a6.34 6.34 0 0 1 6.513 4.031a1 1 0 0 1-1.866.72a4.341 4.341 0 0 0-8.321.787a1 1 0 0 1-1.968-.357a6.34 6.34 0 0 1 5.642-5.18Z"></svg:path><svg:path d="M17.178 7.184a1 1 0 0 1 1.264-.633a5.438 5.438 0 0 1-1.512 10.593a1 1 0 1 1-.075-1.999a3.437 3.437 0 0 0 .956-6.697a1 1 0 0 1-.633-1.264m-11.574.391a4.9 4.9 0 0 1 1.959-.174a1 1 0 1 1-.229 1.987a2.876 2.876 0 1 0-.348 5.734a1 1 0 1 1-.013 2a4.876 4.876 0 0 1-1.37-9.547ZM12 11a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1"></svg:path><svg:path d="M11.293 11.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414z"></svg:path></svg:g></svg:g>`,
})
export class CuidaUploadCloudOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
