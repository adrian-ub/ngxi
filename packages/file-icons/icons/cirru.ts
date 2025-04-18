import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsCirruIcon],svg[file-icons-cirru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.387 256c0 109.732 89.614 199.04 199.764 199.084l-.01 25.387C100.998 480.423 0 379.725 0 256.001C0 132.226 101.037 31.529 225.229 31.529c79.524 0 153.982 42.507 194.314 110.932l-21.87 12.892c-35.79-60.718-101.866-98.437-172.444-98.437c-110.194 0-199.842 89.308-199.842 199.085m383.43 4.863c-65.003 0-117.886 52.883-117.886 117.885c0 31.926 12.572 61.825 35.4 84.193L344.1 444.81c-17.914-17.555-27.781-41.016-27.781-66.062c0-51.003 41.495-92.498 92.498-92.498c33.63 0 64.657 18.308 80.975 47.78L512 321.733c-20.786-37.545-60.323-60.87-103.184-60.87"></svg:path>`,
})
export class FileIconsCirruIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
