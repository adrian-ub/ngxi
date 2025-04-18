import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSkIcon],svg[cif-sk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifSk0" d="M40.919 100.5C24.472 92.578.946 76.854.946 45.749S2.433.499 2.433.499h76.971s1.488 14.146 1.488 45.25c0 31.105-23.526 46.829-39.973 54.751"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#EE1C25" fill-rule="nonzero" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#0B4EA2" fill-rule="nonzero" d="M.5.5h300v133.333H.5z"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="M.5.5h300v66.667H.5z"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="M105.919 155c-17.927-8.635-43.57-25.774-43.57-59.678S63.969 46 63.969 46h83.899s1.621 15.419 1.621 49.322s-25.642 51.043-43.57 59.678"></svg:path><svg:path fill="#EE1C25" fill-rule="nonzero" d="M105.919 150.5c-16.447-7.922-39.973-23.646-39.973-54.751s1.487-45.25 1.487-45.25h76.971s1.488 14.146 1.488 45.25c0 31.105-23.526 46.829-39.973 54.751"></svg:path><svg:g transform="translate(65 50)"><svg:mask id="cifSk1" fill="#fff"><svg:use href="#cifSk0"></svg:use></svg:mask><svg:path fill="#FFF" fill-rule="nonzero" d="M44.436 37.594c4.453.072 13.142.246 20.879-2.342c0 0-.204 2.769-.204 5.994c0 3.226.204 5.994.204 5.994c-7.096-2.375-15.86-2.424-20.879-2.361v17.18h-7.034v-17.18c-5.018-.063-13.782-.014-20.878 2.361c0 0 .204-2.768.204-5.994s-.204-5.994-.204-5.994c7.737 2.589 16.425 2.414 20.878 2.342V26.805c-4.059-.036-9.908.158-16.521 2.371c0 0 .204-2.769.204-5.994s-.204-5.994-.204-5.994c6.604 2.21 12.445 2.407 16.503 2.371c-.208-6.832-2.199-15.443-2.199-15.443s4.096.32 5.734.32c1.639 0 5.734-.32 5.734-.32s-1.99 8.611-2.199 15.443c4.058.035 9.9-.162 16.503-2.371c0 0-.204 2.769-.204 5.994c0 3.226.204 5.994.204 5.994c-6.613-2.213-12.462-2.407-16.521-2.371z" mask="url(#cifSk1)"></svg:path></svg:g><svg:g transform="translate(65 50)"><svg:mask id="cifSk2" fill="#fff"><svg:use href="#cifSk0"></svg:use></svg:mask><svg:path fill="#0B4EA2" fill-rule="nonzero" d="M40.194 110.704L6.116 80.327s4.357-14.091 12.86-14.091c6.757 0 9.224 5.449 9.224 5.449s4.437-11.486 12.719-11.486s12.72 11.486 12.72 11.486s2.465-5.449 9.223-5.449c8.504 0 12.86 14.091 12.86 14.091z" mask="url(#cifSk2)"></svg:path></svg:g></svg:g>`,
})
export class CifSkIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
