import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifRwIcon],svg[cif-rw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A1DE" d="M.5.5h300v100H.5z"></svg:path><svg:path fill="#FAD201" d="M.5 100.5h300v50H.5z"></svg:path><svg:path fill="#20603D" d="M.5 150.5h300v50H.5z"></svg:path><svg:path fill="#E5BE01" d="m279 52.75l-22.336 1.305l21.237 7.042l-21.912-4.52l18.691 12.298l-19.996-10.037l14.871 16.717l-16.717-14.871l10.037 19.996l-12.298-18.69l4.52 21.912l-7.042-21.237L246.75 85l-.278-32.528z"></svg:path><svg:path fill="#E5BE01" d="m279 52.75l-22.336-1.305l21.237-7.042l-21.912 4.52l18.691-12.298l-19.996 10.037l14.871-16.717l-16.717 14.871l10.037-19.996l-12.298 18.691l4.52-21.912l-7.042 21.237L246.75 20.5l-.278 32.528z"></svg:path><svg:path fill="#E5BE01" d="m214.5 52.75l22.336 1.305l-21.237 7.042l21.912-4.52l-18.691 12.298l19.996-10.037l-14.871 16.717l16.717-14.871l-10.037 19.996l12.298-18.69l-4.52 21.912l7.042-21.237L246.75 85l.278-32.528z"></svg:path><svg:path fill="#E5BE01" d="m214.5 52.75l22.336-1.305l-21.237-7.042l21.912 4.52l-18.691-12.298l19.996 10.037l-14.871-16.717l16.717 14.871l-10.037-19.996l12.298 18.691l-4.52-21.912l7.042 21.237L246.75 20.5l.278 32.528z"></svg:path><svg:circle cx="246.75" cy="52.75" r="9.528" fill="#E5BE01" stroke="#00A1DE" stroke-width=".944"></svg:circle></svg:g>`,
})
export class CifRwIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
