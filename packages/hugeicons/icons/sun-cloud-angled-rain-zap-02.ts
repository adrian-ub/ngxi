import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloudAngledRainZap02Icon],svg[hugeicons-sun-cloud-angled-rain-zap-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9.078 15l-1.774 2.684c-.237.36-.356.539-.282.677c.073.139.287.139.715.139h1.526c.428 0 .642 0 .715.139c.074.138-.045.318-.282.677L7.922 22M16 20l-1 2m-2-2l-1 2M2.96 9.194c-.741-2.722.9-5.52 3.664-6.25m-3.665 6.25L2 9.447m.96-.253c.184.677.498 1.285.908 1.806m2.756-8.055L6.367 2m.257.945A5.23 5.23 0 0 1 12 4.67m-8.523.653l-1.013-.577m8.677-2.289l-.584.998"></svg:path><svg:path d="M17.478 10.9h.022c2.485 0 4.5 1.982 4.5 4.426c0 1.927-1.252 3.566-3 4.174m-1.522-8.6q.021-.242.022-.491C17.5 7.422 15.038 5 12 5C9.123 5 6.762 7.172 6.52 9.94m10.958.96a5.34 5.34 0 0 1-1.235 2.951M6.52 9.94C3.984 10.177 2 12.278 2 14.835c0 1.608.786 3.037 2 3.934m2.52-8.83q.237-.021.48-.022c1.126 0 2.165.366 3 .984"></svg:path></svg:g>`,
})
export class HugeiconsSunCloudAngledRainZap02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
