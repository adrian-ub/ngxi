import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsImgDuotoneIcon],svg[lets-icons-img-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="letsIconsImgDuotone0" width="18" height="18" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"></svg:path></svg:mask><svg:g fill="none"><svg:g mask="url(#letsIconsImgDuotone0)"><svg:path fill="currentColor" fill-opacity=".25" d="m12.689 14.57l-1.497-1.633c-1.27-1.385-1.904-2.078-2.73-2.115c-.825-.038-1.52.594-2.91 1.858l-1.921 1.747c-.299.271-.448.407-.533.583l-.024.056c-.074.18-.074.383-.074.786c0 3.669 0 5.503 1.083 6.657q.163.174.346.327c1.212 1.017 3.044.916 6.706.712l3.312-.184c2.61-.145 3.916-.218 4.85-.874c.441-.31.815-.704 1.1-1.161c.603-.97.603-2.278.603-4.892v-.194c0-.408 0-.612-.038-.805a2 2 0 0 0-.3-.72c-.108-.165-.253-.309-.54-.597c-.66-.659-.99-.988-1.357-1.14a2 2 0 0 0-1.53 0c-.368.152-.697.481-1.356 1.14l-.507.507c-.592.592-.889.889-1.248.922a1 1 0 0 1-.228-.005c-.358-.049-.641-.358-1.207-.976"></svg:path></svg:g><svg:circle cx="16" cy="9" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsImgDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
