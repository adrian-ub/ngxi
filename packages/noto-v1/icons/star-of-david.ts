import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1StarOfDavidIcon],svg[noto-v1-star-of-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fbc21a"><svg:path d="M113 240.9H7.76c-1.55 0-2.51-1.68-1.72-3.02l52.62-89.08c.77-1.31 2.67-1.31 3.44 0l52.62 89.08c.79 1.34-.17 3.02-1.72 3.02m-86.39-10.83h67.53c1.55 0 2.51-1.69 1.72-3.02L62.1 170.3c-.78-1.3-2.66-1.3-3.44 0l-33.77 56.75c-.79 1.33.17 3.02 1.72 3.02"></svg:path><svg:path d="M58.64 271.04L4.39 181.91c-.81-1.33.15-3.04 1.71-3.04H113c1.55 0 2.51 1.68 1.72 3.02l-52.64 89.13c-.77 1.3-2.65 1.31-3.44.02m-35.36-78.28l35.36 56.81c.79 1.27 2.65 1.25 3.42-.03l33.8-56.81c.79-1.33-.17-3.02-1.72-3.02H24.98c-1.57-.01-2.53 1.72-1.7 3.05"></svg:path></svg:g><svg:path fill="#f79329" d="m104.74 64l16.25-27.32c.86-1.45.88-3.25.05-4.71a4.68 4.68 0 0 0-4.08-2.37H84.27L68.03 2.3C67.19.87 65.66 0 64 0s-3.19.87-4.03 2.3L43.73 29.6H11.05c-1.69 0-3.24.9-4.08 2.37c-.83 1.47-.82 3.27.05 4.71L23.26 64L7.01 91.32a4.687 4.687 0 0 0 4.03 7.09h32.69l16.24 27.3c.84 1.42 2.38 2.29 4.03 2.29s3.18-.87 4.03-2.29l16.24-27.3h32.69c1.69 0 3.24-.91 4.08-2.37c.83-1.47.82-3.27-.05-4.72zm3.96-25.02l-9.42 15.84l-9.43-15.84zM93.82 64L78.93 89.03H49.06L34.18 64l14.89-25.02h29.87zM64 13.87l9.35 15.72h-18.7zM19.29 38.98h18.85l-9.42 15.84zm0 50.05l9.43-15.85l9.42 15.85zM64 114.13l-9.36-15.72h18.71zm25.85-25.1l9.43-15.85l9.42 15.85z"></svg:path><svg:g fill="none" stroke="#fbc21a" stroke-miterlimit="10" stroke-width="11"><svg:path d="m-119 90l46-79l46 79z"></svg:path><svg:path d="m-27 38l-46 79l-46-79z"></svg:path></svg:g>`,
})
export class NotoV1StarOfDavidIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
