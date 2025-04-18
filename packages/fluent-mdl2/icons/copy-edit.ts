import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CopyEditIcon],svg[fluent-mdl2-copy-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1920v-260l128-129v517h-515l127-128zM1408 896V512H768v1388q0 1-5 22t-12 48t-13 50t-7 28h-91v-384H128V0h859l384 384h128l355 355q-82 0-153 29l-165-165v165h165q-28 12-49 25t-39 29t-36 34t-39 40zM640 384h549L933 128H256v1408h384zm1408 710q0 39-15 76t-43 65l-717 719l-377 94l94-377l717-718q28-28 65-42t76-15q42 0 78 15t64 42t42 63t16 78m-128 0q0-31-20-50t-52-20q-14 0-27 4t-23 15l-692 694l-34 135l135-34l692-693q21-21 21-51"></svg:path>`,
})
export class FluentMdl2CopyEditIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
