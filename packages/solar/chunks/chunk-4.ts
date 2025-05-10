import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDnaBrokenIcon],svg[solar-dna-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11.848 12.152l.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652l-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348l-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152l.191.558c1.048 3.041.046 6.705-2.539 9.29m.5-7l1.843 1.922m-5.078-5.079L8 13.08m3.844-6.315L14 9m2 2l.922.843M4 13l3.5 3.5m12.278-5.61l-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4"></svg:path>`,
})
export class SolarDnaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaLineDuotoneIcon],svg[solar-dna-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m11.848 12.152l.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652l-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348l-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152l.191.558c1.048 3.041.046 6.705-2.539 9.29"></svg:path><svg:path d="m6.765 11.843l5.078 5.079m.001-10.157l5.078 5.078M4 13l3.5 3.5m12.278-5.61l-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDnaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaLinearIcon],svg[solar-dna-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11.848 12.152l.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652l-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348l-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152l.191.558c1.048 3.041.046 6.705-2.539 9.29M6.765 11.843l5.078 5.079m.001-10.157l5.078 5.078M4 13l3.5 3.5m12.278-5.61l-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4"></svg:path>`,
})
export class SolarDnaLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaOutlineIcon],svg[solar-dna-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.03 1.47a.75.75 0 0 1 0 1.06q-.624.626-1.12 1.32l1.207 1.207a.75.75 0 0 1-1.06 1.06l-.948-.948q-.316.622-.535 1.266l4.879 4.878a1 1 0 0 1 .096.118a10 10 0 0 0 1.207-.502L15.748 7.92a.75.75 0 1 1 1.06-1.06l3.276 3.275q.73-.512 1.386-1.166a.75.75 0 1 1 1.06 1.06c-2.622 2.623-6.264 3.854-9.556 3.213c.75 3.175-.4 6.744-2.944 9.287a.75.75 0 1 1-1.06-1.06a10 10 0 0 0 1.158-1.395l-1.354-1.353a.75.75 0 1 1 1.061-1.06l1.063 1.062q.279-.606.463-1.228l-.048-.044L6.5 12.64q-.66.195-1.302.499l2.831 2.83a.75.75 0 0 1-1.06 1.062l-3.112-3.113q-.7.488-1.328 1.112a.75.75 0 0 1-1.06-1.06c2.543-2.544 6.112-3.693 9.287-2.944c-.64-3.292.59-6.934 3.213-9.556a.75.75 0 0 1 1.06 0m.82 10.362l-3.68-3.682c-.159 1.17-.073 2.334.271 3.412c1.078.344 2.242.43 3.412.271m-4.52 1.122c.299.867.413 1.8.353 2.747l-3.384-3.384c.947-.06 1.88.054 2.747.353l.212.072z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDnaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddBoldIcon],svg[solar-document-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.519 16.501c.175-.136.334-.295.651-.612l3.957-3.958c.096-.095.052-.26-.075-.305a4.3 4.3 0 0 1-1.644-1.034a4.3 4.3 0 0 1-1.034-1.644c-.045-.127-.21-.171-.305-.075L14.11 12.83c-.317.317-.476.476-.612.651q-.243.311-.412.666c-.095.2-.166.414-.308.84l-.184.55l-.292.875l-.273.82a.584.584 0 0 0 .738.738l.82-.273l.875-.292l.55-.184c.426-.142.64-.212.84-.308q.355-.17.666-.412m5.849-5.809a2.163 2.163 0 1 0-3.06-3.059l-.126.128a.52.52 0 0 0-.148.465c.02.107.055.265.12.452c.13.375.376.867.839 1.33s.955.709 1.33.839c.188.065.345.1.452.12a.53.53 0 0 0 .465-.148z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C20.981 19.676 21 17.832 21 14.18l-2.818 2.818c-.27.27-.491.491-.74.686a5 5 0 0 1-.944.583a8 8 0 0 1-.944.355l-2.312.771a2.083 2.083 0 0 1-2.635-2.635l.274-.82l.475-1.426l.021-.066c.121-.362.22-.658.356-.944q.24-.504.583-.943c.195-.25.416-.47.686-.74l4.006-4.007L18.12 6.7l.127-.127A3.65 3.65 0 0 1 20.838 5.5c-.151-1.03-.444-1.763-1.01-2.328C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddBoldDuotoneIcon],svg[solar-document-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.519 16.501c.175-.136.334-.295.651-.612l3.957-3.958c.096-.095.052-.26-.075-.305a4.3 4.3 0 0 1-1.644-1.034a4.3 4.3 0 0 1-1.034-1.644c-.045-.127-.21-.171-.305-.075L14.11 12.83c-.317.317-.476.476-.612.651q-.243.311-.412.666c-.095.2-.166.414-.308.84l-.184.55l-.292.875l-.273.82a.584.584 0 0 0 .738.738l.82-.273l.875-.292l.55-.184c.426-.142.64-.212.84-.308q.355-.17.666-.412m5.849-5.809a2.163 2.163 0 1 0-3.06-3.059l-.126.128a.52.52 0 0 0-.148.465c.02.107.055.265.12.452c.13.375.376.867.839 1.33s.955.709 1.33.839c.188.065.345.1.452.12a.53.53 0 0 0 .465-.148z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddBrokenIcon],svg[solar-document-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></svg:path><svg:path stroke-linecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172M21 14c0 3.771 0 5.657-1.172 6.828m-15.656 0C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172m0 0c.944-.943 1.127-2.348 1.163-4.828"></svg:path></svg:g>`,
})
export class SolarDocumentAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddLineDuotoneIcon],svg[solar-document-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></svg:path><svg:path stroke-linecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5"></svg:path><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDocumentAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddLinearIcon],svg[solar-document-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></svg:path><svg:path stroke-linecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5M19.828 3.172C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828"></svg:path></svg:g>`,
})
export class SolarDocumentAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddOutlineIcon],svg[solar-document-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238a.75.75 0 0 1-1.06 1.06c-.424-.422-1.004-.676-2.01-.811c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S4.025 4.705 3.89 5.71c-.138 1.029-.14 2.383-.14 4.29v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.696-.696.907-1.777.943-4.309a.75.75 0 0 1 1.5.022c-.035 2.427-.192 4.158-1.382 5.348c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m7.17 5.796a2.716 2.716 0 1 1 3.84 3.84L17.2 15.643a7 7 0 0 1-.63.587q-.346.27-.744.46c-.224.107-.46.185-.806.3l-2.084.695a1.28 1.28 0 0 1-1.62-1.62l.681-2.04l.014-.043c.116-.347.194-.582.301-.806a4 4 0 0 1 .46-.744c.153-.196.328-.371.587-.63l.031-.031zm2.78 1.06a1.216 1.216 0 0 0-1.72 0l-.182.182l.034.107c.094.27.273.63.611.968a2.55 2.55 0 0 0 1.075.645l.182-.182a1.216 1.216 0 0 0 0-1.72m-1.328 3.048a4 4 0 0 1-.99-.73a4 4 0 0 1-.73-.99L14.45 12.83c-.301.301-.407.409-.496.523q-.17.218-.289.467c-.062.131-.111.274-.246.678l-.4 1.2l.283.283l1.2-.4c.404-.135.547-.184.678-.246q.248-.12.467-.289c.114-.089.222-.195.523-.496zM7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentBoldIcon],svg[solar-document-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M8 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentBoldDuotoneIcon],svg[solar-document-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentBrokenIcon],svg[solar-document-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M8 14h5m-5-4h1m7 0h-4"></svg:path>`,
})
export class SolarDocumentBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentLineDuotoneIcon],svg[solar-document-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 10h8m-8 4h5"></svg:path></svg:g>`,
})
export class SolarDocumentLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentLinearIcon],svg[solar-document-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path stroke-linecap="round" d="M8 10h8m-8 4h5"></svg:path></svg:g>`,
})
export class SolarDocumentLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineBoldIcon],svg[solar-document-medicine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M12.75 6a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 1 0 0 1.5h1.25V10a.75.75 0 0 0 1.5 0V8.75H14a.75.75 0 0 0 0-1.5h-1.25zM8 13.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm1 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentMedicineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineBoldDuotoneIcon],svg[solar-document-medicine-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V10a.75.75 0 0 1-1.5 0V8.75H10a.75.75 0 1 1 0-1.5h1.25V6a.75.75 0 0 1 .75-.75M7.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentMedicineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineBrokenIcon],svg[solar-document-medicine-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 6v2m0 0v2m0-2h-2m2 0h2m-6 6h1m7 0h-4m-3 4h6M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path>`,
})
export class SolarDocumentMedicineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineLineDuotoneIcon],svg[solar-document-medicine-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 6v2m0 0v2m0-2h-2m2 0h2m-6 6h8m-7 4h6"></svg:path></svg:g>`,
})
export class SolarDocumentMedicineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineLinearIcon],svg[solar-document-medicine-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path stroke-linecap="round" d="M12 6v2m0 0v2m0-2h-2m2 0h2m-6 6h8m-7 4h6"></svg:path></svg:g>`,
})
export class SolarDocumentMedicineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineOutlineIcon],svg[solar-document-medicine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14M12 5.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V10a.75.75 0 0 1-1.5 0V8.75H10a.75.75 0 1 1 0-1.5h1.25V6a.75.75 0 0 1 .75-.75M7.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentMedicineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentOutlineIcon],svg[solar-document-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextBoldIcon],svg[solar-document-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextBoldDuotoneIcon],svg[solar-document-text-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0-4A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 8a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentTextBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextBrokenIcon],svg[solar-document-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 12h1m7 0h-4m4-4h-1m-3 0H8m0 8h5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path>`,
})
export class SolarDocumentTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextLineDuotoneIcon],svg[solar-document-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 12h8M8 8h8m-8 8h5"></svg:path></svg:g>`,
})
export class SolarDocumentTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextLinearIcon],svg[solar-document-text-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path stroke-linecap="round" d="M8 12h8M8 8h8m-8 8h5"></svg:path></svg:g>`,
})
export class SolarDocumentTextLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextOutlineIcon],svg[solar-document-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14M7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsBoldIcon],svg[solar-documents-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 10v4c0 2.829 0 4.243.879 5.122c.217.217.467.38.763.504l-.019-.134c-.123-.918-.123-2.063-.123-3.393V7.902c0-1.33 0-2.476.123-3.393l.02-.134a2.3 2.3 0 0 0-.764.504C1.75 5.758 1.75 7.172 1.75 10m20 0v4c0 2.829 0 4.243-.879 5.122c-.217.217-.467.38-.763.504l.019-.134c.123-.918.123-2.063.123-3.393V7.902c0-1.33 0-2.476-.123-3.393l-.02-.134c.297.123.547.287.764.504c.879.879.879 2.293.879 5.121"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.629 2.879C4.75 3.757 4.75 5.172 4.75 8v8c0 2.828 0 4.243.879 5.121C6.507 22 7.922 22 10.75 22h2c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C16.993 2 15.578 2 12.75 2h-2c-2.828 0-4.243 0-5.121.879M8 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17m.75-4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsBoldDuotoneIcon],svg[solar-documents-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.879 2.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16V8c0-2.828 0-4.243-.879-5.121C17.243 2 15.828 2 13 2h-2c-2.828 0-4.243 0-5.121.879M8.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 12.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.235 4.058C5 4.941 5 6.177 5 8v8c0 1.823 0 3.058.235 3.942L5 19.924c-.975-.096-1.631-.313-2.121-.803C2 18.243 2 16.828 2 14v-4c0-2.829 0-4.243.879-5.121c.49-.49 1.146-.707 2.121-.803zm13.53 15.884C19 19.058 19 17.822 19 16V8c0-1.823 0-3.059-.235-3.942l.235.018c.975.096 1.631.313 2.121.803C22 5.757 22 7.17 22 9.999v4c0 2.83 0 4.243-.879 5.122c-.49.49-1.146.707-2.121.803z" opacity=".5"></svg:path>`,
})
export class SolarDocumentsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsBrokenIcon],svg[solar-documents-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 16c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16v-4m0-4c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v4"></svg:path><svg:path d="M5 4.076c-.975.096-1.631.313-2.121.803C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121c.49.49 1.146.707 2.121.803M19 4.076c.975.096 1.631.313 2.121.803C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121c-.49.49-1.146.707-2.121.803"></svg:path><svg:path stroke-linecap="round" d="M9 13h6M9 9h6m-6 8h3"></svg:path></svg:g>`,
})
export class SolarDocumentsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsLineDuotoneIcon],svg[solar-documents-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path d="M5 4.076c-.975.096-1.631.313-2.121.803C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121c.49.49 1.146.707 2.121.803M19 4.076c.975.096 1.631.313 2.121.803C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121c-.49.49-1.146.707-2.121.803" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 13h6" opacity=".7"></svg:path><svg:path stroke-linecap="round" d="M9 9h6"></svg:path><svg:path stroke-linecap="round" d="M9 17h3" opacity=".4"></svg:path></svg:g>`,
})
export class SolarDocumentsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsLinearIcon],svg[solar-documents-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16zm0-3.924c-.975.096-1.631.313-2.121.803C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121c.49.49 1.146.707 2.121.803M19 4.076c.975.096 1.631.313 2.121.803C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121c-.49.49-1.146.707-2.121.803"></svg:path><svg:path stroke-linecap="round" d="M9 13h6M9 9h6m-6 8h3"></svg:path></svg:g>`,
})
export class SolarDocumentsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticBoldIcon],svg[solar-documents-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 2h2c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v8c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-2c-2.828 0-4.243 0-5.121-.879c-.879-.878-.879-2.293-.879-5.121V8c0-2.828 0-4.243.879-5.121C6.507 2 7.922 2 10.75 2M8 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17M1.75 4.25A.75.75 0 0 1 2.5 5v14A.75.75 0 0 1 1 19V5a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentsMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticBoldDuotoneIcon],svg[solar-documents-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.75 2h2c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v8c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-2c-2.828 0-4.243 0-5.121-.879c-.879-.878-.879-2.293-.879-5.121V8c0-2.828 0-4.243.879-5.121C6.507 2 7.922 2 10.75 2M8 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17"></svg:path><svg:path d="M1.75 4.25A.75.75 0 0 1 2.5 5v14A.75.75 0 0 1 1 19V5a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDocumentsMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticBrokenIcon],svg[solar-documents-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 13h6M9 9h6m-6 8h3M2 19V5m20 14V5m-3 11c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16v-4m0-4c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v4"></svg:path>`,
})
export class SolarDocumentsMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticLineDuotoneIcon],svg[solar-documents-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke-linecap="round" d="M9 13h6" opacity=".7"></svg:path><svg:path stroke-linecap="round" d="M9 9h6"></svg:path><svg:path stroke-linecap="round" d="M9 17h3" opacity=".4"></svg:path><svg:path stroke-linecap="round" d="M2 19V5m20 14V5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDocumentsMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticLinearIcon],svg[solar-documents-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke-linecap="round" d="M9 13h6M9 9h6m-6 8h3M2 19V5m20 14V5"></svg:path></svg:g>`,
})
export class SolarDocumentsMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticOutlineIcon],svg[solar-documents-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M7.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103M2 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 2 4.25m20 0a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentsMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsOutlineIcon],svg[solar-documents-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.298.299.512.636.667 1.01c.932.116 1.715.372 2.333.99c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.618.618-1.4.874-2.333.991c-.155.373-.369.71-.667 1.009c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982a3.1 3.1 0 0 1-.667-1.009c-.932-.117-1.715-.373-2.333-.991c-.602-.602-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-4.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.618-.618 1.4-.874 2.333-.99a3.1 3.1 0 0 1 .667-1.01c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.328 4.94c-.437.106-.71.26-.919.47c-.277.276-.457.664-.556 1.398c-.101.756-.103 1.757-.103 3.192v4c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.209.209.482.363.92.469c-.079-.812-.079-1.806-.079-3.005v-8.11c0-1.198 0-2.193.078-3.005m15.344 14.12c.437-.106.71-.26.919-.469c.277-.277.457-.665.556-1.4c.101-.754.103-1.755.103-3.19v-4c0-1.436-.002-2.437-.103-3.193c-.099-.734-.28-1.122-.556-1.399c-.209-.209-.482-.363-.92-.469c.079.812.079 1.807.079 3.005v8.11c0 1.198 0 2.193-.078 3.005M7.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarBoldIcon],svg[solar-dollar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 7.847c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5.001v3.304c.936-.255 1.5-.974 1.5-1.652s-.564-1.397-1.5-1.652"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDollarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarBoldDuotoneIcon],svg[solar-dollar-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path d="M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75m-.75 2.597c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm3 6.653c0-.678-.564-1.397-1.5-1.652v3.304c.936-.255 1.5-.974 1.5-1.652"></svg:path></svg:g>`,
})
export class SolarDollarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarBrokenIcon],svg[solar-dollar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarDollarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarLineDuotoneIcon],svg[solar-dollar-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path></svg:g>`,
})
export class SolarDollarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarLinearIcon],svg[solar-dollar-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path></svg:g>`,
})
export class SolarDollarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticBoldIcon],svg[solar-dollar-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.75-16a.75.75 0 0 0-1.5 0v.317c-1.63.292-3 1.517-3 3.183c0 1.917 1.813 3.25 3.75 3.25c1.377 0 2.25.906 2.25 1.75s-.873 1.75-2.25 1.75c-1.376 0-2.25-.906-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.666 1.37 2.891 3 3.183V18a.75.75 0 0 0 1.5 0v-.317c1.63-.292 3-1.517 3-3.183c0-1.917-1.813-3.25-3.75-3.25c-1.376 0-2.25-.906-2.25-1.75s.874-1.75 2.25-1.75c1.377 0 2.25.906 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.666-1.37-2.891-3-3.183z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDollarMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticBoldDuotoneIcon],svg[solar-dollar-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 6a.75.75 0 0 0-1.5 0v.317c-1.63.292-3 1.517-3 3.183c0 1.917 1.813 3.25 3.75 3.25c1.377 0 2.25.906 2.25 1.75s-.873 1.75-2.25 1.75c-1.376 0-2.25-.906-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.666 1.37 2.891 3 3.183V18a.75.75 0 0 0 1.5 0v-.317c1.63-.292 3-1.517 3-3.183c0-1.917-1.813-3.25-3.75-3.25c-1.376 0-2.25-.906-2.25-1.75s.874-1.75 2.25-1.75c1.377 0 2.25.906 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.666-1.37-2.891-3-3.183z"></svg:path>`,
})
export class SolarDollarMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticBrokenIcon],svg[solar-dollar-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarDollarMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticLineDuotoneIcon],svg[solar-dollar-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path></svg:g>`,
})
export class SolarDollarMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticLinearIcon],svg[solar-dollar-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path></svg:g>`,
})
export class SolarDollarMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticOutlineIcon],svg[solar-dollar-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.844-.873-1.75-2.25-1.75c-1.376 0-2.25.906-2.25 1.75s.874 1.75 2.25 1.75c1.937 0 3.75 1.333 3.75 3.25c0 1.666-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .844.874 1.75 2.25 1.75c1.377 0 2.25-.906 2.25-1.75s-.873-1.75-2.25-1.75c-1.937 0-3.75-1.333-3.75-3.25c0-1.666 1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDollarMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarOutlineIcon],svg[solar-dollar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75m-.75 2.597c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5v3.306c.936-.256 1.5-.974 1.5-1.653c0-.678-.564-1.397-1.5-1.652" clip-rule="evenodd"></svg:path>`,
})
export class SolarDollarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenBoldIcon],svg[solar-donut-bitten-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.28 21.554a1.8 1.8 0 0 1 .664-1.926c.493-.364 1.078-.483 1.571-.366a.19.19 0 0 0 .181-.047a.18.18 0 0 0 .017-.233l-.093-.127c-.612-.827-.307-2.09.68-2.834a32 32 0 0 0-.471-.314l-.178-.116a32 32 0 0 1-.64-.425a3.73 3.73 0 0 1-2.01.584a3.74 3.74 0 0 1-2.763-1.214c-.407.221-.883.444-1.374.635c-.801.312-1.735.579-2.532.579c-1.03 0-2.094-.446-2.92-.9C3.64 18.986 7.469 22 12.002 22c.213 0 .34-.242.28-.446M9.75 12a2.25 2.25 0 1 1 3.83 1.602a.8.8 0 0 0-.142.126l-.01.012A2.25 2.25 0 0 1 9.75 12"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.48 14.795c.707-.523 1.607-.539 2.147-.078A10 10 0 0 0 22 12a9.95 9.95 0 0 0-1.565-5.374l-.905.904a.75.75 0 1 1-1.06-1.06l1-1l.058-.053A9.98 9.98 0 0 0 12.001 2a9.95 9.95 0 0 0-5.375 1.565l.904.905a.75.75 0 1 1-1.06 1.06l-1-1l-.053-.058a9.98 9.98 0 0 0-3.381 8.372c.216.154.484.333.784.512c.818.487 1.752.894 2.512.894c.516 0 1.243-.187 1.987-.477c.42-.163.816-.348 1.145-.524a3.75 3.75 0 1 1 6.646.848l.371.245l.17.11c.477.313 1.062.7 1.38 1.018l.037.04c.475.059.901.28 1.182.66l.275.373a.086.086 0 0 0 .13.01a.1.1 0 0 0 .024-.075c-.078-.586.213-1.249.8-1.683M16.45 4.4a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.98-.93a.75.75 0 0 0 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0M8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 0 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m-2.513-.386a.75.75 0 0 0-.372.993l.585 1.287a.75.75 0 0 0 1.365-.62L6.89 7.545a.75.75 0 0 0-.993-.372m10.854 3.964a.75.75 0 0 0 .714-.784L17.4 8.941a.75.75 0 0 0-1.498.07l.066 1.414a.75.75 0 0 0 .784.713m1.686.92a.75.75 0 0 0 1.058.068l1.678-1.478a.75.75 0 0 0-.99-1.126L18.503 11a.75.75 0 0 0-.067 1.059M6.943 10.896a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 0 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M3.563 8.19a.75.75 0 0 0-.707.79l.078 1.413a.75.75 0 0 0 1.498-.084l-.079-1.412a.75.75 0 0 0-.79-.707" clip-rule="evenodd"></svg:path>`,
})
export class SolarDonutBittenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenBoldDuotoneIcon],svg[solar-donut-bitten-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12q0 .531.054 1.048C2.404 13.352 4.367 15 6 15c1.212 0 2.606-.908 3.387-1.5l.01-.009a3 3 0 1 1 4.61.739c.47.412 1.084.77 1.798.77c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403l.092.132c.211-.81.324-1.659.324-2.535c0-5.523-4.477-10-10-10" opacity=".5"></svg:path><svg:path fill="currentColor" d="m19.527 5.417l-.058.053l-1 1a.75.75 0 1 0 1.06 1.06l.905-.904q-.409-.64-.907-1.209M5.416 4.472q.025.03.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905q-.64.41-1.209.907m5.053.058a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06zm6.131.92a.75.75 0 0 0-1.2-.9l-1.5 2a.75.75 0 1 0 1.2.9zM8.409 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 0 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m9.056 2.794a.75.75 0 0 1-1.499.07L15.9 9.013a.75.75 0 0 1 1.498-.07zm.971 1.705a.75.75 0 0 0 1.059.067l1.678-1.478a.75.75 0 0 0-.992-1.126L18.503 11a.75.75 0 0 0-.067 1.059M5.524 8.167a.75.75 0 1 1 1.365-.62l.585 1.286a.75.75 0 0 1-1.365.621zm1.418 2.728a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M2.855 8.98a.75.75 0 1 1 1.497-.084l.079 1.412a.75.75 0 0 1-1.498.083z"></svg:path><svg:path fill="currentColor" d="M6 15c1.212 0 2.607-.908 3.388-1.5l.009-.009a3 3 0 0 0 4.61.739c.47.412 1.085.77 1.799.77c.845 0 1.267-.5 1.69-1c.422-.5.844-1 1.689-1c1.077 0 1.926.814 2.399 1.403l.092.132l-.049.182c-.54-.461-1.44-.445-2.148.078c-.601.445-.893 1.13-.793 1.726l-.102.101l-.334-.452c-.616-.832-1.927-.906-2.93-.165c-1.003.742-1.316 2.018-.7 2.85l.185.25l-.185.186c-.513-.162-1.148-.054-1.675.337c-.798.59-.935 1.693-.453 2.36A10 10 0 0 1 12 22c-5.168 0-9.421-3.922-9.945-8.952C2.404 13.352 4.367 15 6 15"></svg:path>`,
})
export class SolarDonutBittenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenBrokenIcon],svg[solar-donut-bitten-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366M7 5L6 4m.792 5.144l-.585-1.288"></svg:path><svg:path fill="currentColor" d="m12.5 22l.034.75a.75.75 0 0 0 .569-1.196zm.444-2.372l.446.603zm6.535-4.833l-.446-.603zm-4.86 4.06l.603-.446zm.7-2.85l.446.603zm2.93.165l.604-.446zm3.378-1.453l-.487.57a.75.75 0 0 0 1.208-.367zm-3.043 1.906l-.603.446a.75.75 0 0 0 1.133.084zm.101-.102l.53.53a.75.75 0 0 0 .21-.654zm-4.066 2.77l-.225.715a.75.75 0 0 0 .755-.185zm.185-.185l.53.53a.75.75 0 0 0 .073-.976zM3.021 17.913a.75.75 0 1 0 1.252-.826zm4.943 2.412a.75.75 0 1 0-.656 1.35zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm1.103 18.804c-.233-.315-.2-.963.287-1.323l-.892-1.206c-1.117.826-1.353 2.404-.601 3.421zm2.12-3.145c-.296-.4-.237-1.224.542-1.8l-.892-1.207c-1.225.907-1.793 2.633-.857 3.9zm.542-1.8c.78-.577 1.586-.392 1.881.007l1.206-.892c-.936-1.265-2.753-1.228-3.979-.322zm4.16-1.211c.496-.367 1-.293 1.215-.11l.973-1.142c-.867-.739-2.162-.633-3.08.046zM21.25 12a9.3 9.3 0 0 1-.345 2.514l1.443.406c.262-.93.402-1.909.402-2.92zm-8.784 9.25c-.134.007-.264 0-.466 0v1.5c.11 0 .36.007.534 0zm5.18-4.634l.335.453l1.206-.892l-.335-.453zm1.78-.219c-.047-.274.086-.694.499-.999l-.892-1.206c-.791.585-1.24 1.536-1.087 2.453zm-.312.756l.102-.101l-1.06-1.061l-.102.101zm-5.724 3.078c.357-.265.745-.306 1.004-.225l.45-1.43c-.767-.242-1.648-.068-2.346.449zm.626-.93l.185.25l1.206-.891l-.185-.25zm1.133.52l.186-.185l-1.061-1.06l-.185.185zM4.273 17.087A9.2 9.2 0 0 1 2.75 12h-1.5c0 2.183.652 4.216 1.771 5.913zM12 21.25a9.2 9.2 0 0 1-4.036-.925l-.656 1.35A10.7 10.7 0 0 0 12 22.75z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m6.613 2c-.5-.5-1.529-.861-2-1.276"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.65 8.977l.066 1.412m3.962-.304L19 11.563M5.665 12.641L6.5 11.5m-2.817-1.15l-.079-1.412"></svg:path></svg:g>`,
})
export class SolarDonutBittenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenLineDuotoneIcon],svg[solar-donut-bitten-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.5 7L16 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19 7l1-1" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 5l-1-1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.5 7l-1.366.366M7 5L6 4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6.792 9.144l-.585-1.288"></svg:path><svg:path fill="currentColor" d="m12.5 22l.034.75a.75.75 0 0 0 .569-1.196zm.444-2.372l.446.603zm6.535-4.833l-.446-.603zm-4.86 4.06l.603-.446zm.7-2.85l.446.603zm2.93.165l.604-.446zm3.378-1.453l-.487.57a.75.75 0 0 0 1.208-.367zm-3.043 1.906l-.603.446a.75.75 0 0 0 1.133.084zm.101-.102l.53.53a.75.75 0 0 0 .21-.654zm-4.066 2.77l-.225.715a.75.75 0 0 0 .755-.185zm.185-.185l.53.53a.75.75 0 0 0 .073-.976zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm1.103 18.804c-.233-.315-.2-.963.287-1.323l-.892-1.206c-1.117.826-1.353 2.404-.601 3.421zm2.12-3.145c-.296-.4-.237-1.224.542-1.8l-.892-1.207c-1.225.907-1.793 2.633-.857 3.9zm.542-1.8c.78-.577 1.586-.392 1.881.007l1.206-.892c-.936-1.265-2.753-1.228-3.979-.322zm4.16-1.211c.496-.367 1-.293 1.215-.11l.973-1.142c-.867-.739-2.162-.633-3.08.046zM21.25 12a9.3 9.3 0 0 1-.345 2.514l1.443.406c.262-.93.402-1.909.402-2.92zm-8.784 9.25c-.134.007-.264 0-.466 0v1.5c.11 0 .36.007.534 0zm5.18-4.634l.335.453l1.206-.892l-.335-.453zm1.78-.219c-.047-.274.086-.694.499-.999l-.892-1.206c-.791.585-1.24 1.536-1.087 2.453zm-.312.756l.102-.101l-1.06-1.061l-.102.101zm-5.724 3.078c.357-.265.745-.306 1.004-.225l.45-1.43c-.767-.242-1.648-.068-2.346.449zm.626-.93l.185.25l1.206-.891l-.185-.25zm1.133.52l.186-.185l-1.061-1.06l-.185.185z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m6.613 2c-.5-.5-1.529-.861-2-1.276" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.65 8.977l.066 1.412" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.678 10.085L19 11.563M5.665 12.641L6.5 11.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m3.683 10.35l-.079-1.412" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDonutBittenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenLinearIcon],svg[solar-donut-bitten-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366M7 5L6 4m.792 5.144l-.585-1.288"></svg:path><svg:path fill="currentColor" d="m12.5 22l.034.75a.75.75 0 0 0 .569-1.196zm.444-2.372l.446.603zm6.535-4.833l-.446-.603zm-4.86 4.06l.603-.446zm.7-2.85l.446.603zm2.93.165l.604-.446zm3.378-1.453l-.487.57a.75.75 0 0 0 1.208-.367zm-3.043 1.906l-.603.446a.75.75 0 0 0 1.133.084zm.101-.102l.53.53a.75.75 0 0 0 .21-.654zm-4.066 2.77l-.225.715a.75.75 0 0 0 .755-.185zm.185-.185l.53.53a.75.75 0 0 0 .073-.976zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm1.103 18.804c-.233-.315-.2-.963.287-1.323l-.892-1.206c-1.117.826-1.353 2.404-.601 3.421zm2.12-3.145c-.296-.4-.237-1.224.542-1.8l-.892-1.207c-1.225.907-1.793 2.633-.857 3.9zm.542-1.8c.78-.577 1.586-.392 1.881.007l1.206-.892c-.936-1.265-2.753-1.228-3.979-.322zm4.16-1.211c.496-.367 1-.293 1.215-.11l.973-1.142c-.867-.739-2.162-.633-3.08.046zM21.25 12a9.3 9.3 0 0 1-.345 2.514l1.443.406c.262-.93.402-1.909.402-2.92zm-8.784 9.25c-.134.007-.264 0-.466 0v1.5c.11 0 .36.007.534 0zm5.18-4.634l.335.453l1.206-.892l-.335-.453zm1.78-.219c-.047-.274.086-.694.499-.999l-.892-1.206c-.791.585-1.24 1.536-1.087 2.453zm-.312.756l.102-.101l-1.06-1.061l-.102.101zm-5.724 3.078c.357-.265.745-.306 1.004-.225l.45-1.43c-.767-.242-1.648-.068-2.346.449zm.626-.93l.185.25l1.206-.891l-.185-.25zm1.133.52l.186-.185l-1.061-1.06l-.185.185z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m6.613 2c-.5-.5-1.529-.861-2-1.276"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.65 8.977l.066 1.412m3.962-.304L19 11.563M5.665 12.641L6.5 11.5m-2.817-1.15l-.079-1.412"></svg:path></svg:g>`,
})
export class SolarDonutBittenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenOutlineIcon],svg[solar-donut-bitten-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.924 10.206a9.3 9.3 0 0 0-.15 2.467l.066.054c.22.176.53.41.892.643c.757.488 1.6.88 2.268.88c.436 0 .964-.169 1.518-.448c.337-.17.659-.367.943-.56a3.75 3.75 0 1 1 6.675.815q.071.04.15.08l.06.033c.292.158.667.363.98.617c.66-.109 1.336-.008 1.89.343c.193-.36.473-.684.817-.938c.602-.446 1.367-.644 2.066-.52a9.3 9.3 0 0 0 .055-3.007l-1.659 1.46A.75.75 0 1 1 18.504 11l1.678-1.478a.75.75 0 0 1 .686-.163a9.2 9.2 0 0 0-.977-2.189l-.36.36a.75.75 0 1 1-1.061-1.06l.524-.524A9.23 9.23 0 0 0 12 2.75c-1.77 0-3.424.497-4.83 1.36l.36.36a.75.75 0 0 1-1.06 1.06l-.524-.524A9.3 9.3 0 0 0 3.569 8.19a.75.75 0 0 1 .784.707l.079 1.412a.75.75 0 0 1-1.498.084zm11.786 5.326l-.185-.1c-.153-.082-.327-.175-.497-.277A3.73 3.73 0 0 1 12 15.75a3.74 3.74 0 0 1-2.767-1.22c-.31.208-.664.423-1.04.612c-.642.323-1.417.608-2.193.608c-1.013 0-2.047-.488-2.82-.957a9.26 9.26 0 0 0 8.286 6.442a2.57 2.57 0 0 1 1.032-2.21a2.85 2.85 0 0 1 1.136-.507c-.29-1.06.192-2.243 1.076-2.986M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 1.011-.14 1.99-.402 2.92a.75.75 0 0 1-1.208.368c-.214-.183-.719-.257-1.215.11c-.413.305-.546.725-.5 1a.75.75 0 0 1-.21.654l-.1.101a.75.75 0 0 1-1.134-.084l-.335-.453c-.295-.4-1.102-.584-1.88-.008c-.78.576-.84 1.402-.544 1.801l.185.25a.75.75 0 0 1-.072.977l-.186.185a.75.75 0 0 1-.755.185c-.259-.081-.647-.04-1.004.225c-.487.36-.52 1.008-.287 1.323a.75.75 0 0 1-.569 1.195a7 7 0 0 1-.417.002L12 22.75C6.063 22.75 1.25 17.937 1.25 12m9.22-8.53a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06m5.98.93a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.226 2.406a.75.75 0 0 1-.53.918l-1.366.366a.75.75 0 1 1-.388-1.448l1.366-.366a.75.75 0 0 1 .918.53m-5.327.368a.75.75 0 0 1 .993.372l.585 1.287a.75.75 0 0 1-1.365.621l-.586-1.287a.75.75 0 0 1 .373-.993m10.718 1.053a.75.75 0 0 1 .784.714l.066 1.413a.75.75 0 0 1-1.498.07l-.066-1.412a.75.75 0 0 1 .713-.785M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-5.057 1.145a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 0 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarDonutBittenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBoldIcon],svg[solar-donut-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.677 14.531c.493-.492.802-.781 1.476-.781c.594 0 1.134.237 1.582.547C20.697 18.713 16.732 22 12 22c-4.532 0-8.36-3.015-9.588-7.15c.825.454 1.889.9 2.92.9c.813 0 1.635-.277 2.325-.598a11.4 11.4 0 0 0 1.422-.8A3.74 3.74 0 0 0 12 15.75c.752 0 1.452-.221 2.039-.602c.574.337 1.285.602 2.104.602c1.313 0 2.006-.691 2.513-1.198z"></svg:path><svg:path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 8.25a3.75 3.75 0 0 0-3.612 4.76c-.379.256-.855.546-1.363.782c-.604.28-1.194.458-1.693.458c-.76 0-1.694-.407-2.513-.894c-.3-.179-.568-.358-.784-.512Q2 12.426 2 12a9.98 9.98 0 0 1 3.417-7.528q.024.03.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905A9.95 9.95 0 0 1 12 2a9.98 9.98 0 0 1 7.528 3.417l-.058.053l-1 1a.75.75 0 0 0 1.06 1.06l.905-.904a9.95 9.95 0 0 1 1.54 6.073a4.04 4.04 0 0 0-1.822-.449c-1.314 0-2.006.691-2.514 1.198l-.021.021c-.493.492-.802.781-1.475.781c-.35 0-.683-.082-.992-.216A3.75 3.75 0 0 0 12 8.25m4.45-3.85a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.98-.93a.75.75 0 0 0 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0M8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 1 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m8.342 3.578a.75.75 0 0 0 .713-.784L17.4 8.94a.75.75 0 1 0-1.498.07l.066 1.413a.75.75 0 0 0 .784.714m2.19.416A.75.75 0 0 0 20 11.62l1.173-.973a.75.75 0 1 0-.991-1.126l-1.173.973a.75.75 0 0 0-.068 1.059M5.896 7.174a.75.75 0 0 0-.373.993l.586 1.287a.75.75 0 1 0 1.365-.62L6.89 7.545a.75.75 0 0 0-.993-.372m1.046 3.72a.75.75 0 0 1 .162 1.05l-.835 1.14a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M3.563 8.19a.75.75 0 0 0-.708.79l.079 1.412a.75.75 0 1 0 1.498-.083l-.08-1.412a.75.75 0 0 0-.79-.707" clip-rule="evenodd"></svg:path>`,
})
export class SolarDonutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBoldDuotoneIcon],svg[solar-donut-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12q0 .531.054 1.048C2.404 13.352 4.367 15 6 15c1.212 0 2.606-.908 3.387-1.5l.01-.009a3 3 0 1 1 4.61.739c.47.412 1.084.77 1.798.77c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403l.092.132c.211-.81.324-1.659.324-2.535c0-5.523-4.477-10-10-10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.388 13.5C8.607 14.092 7.212 15 6 15c-1.633 0-3.596-1.648-3.945-1.952C2.579 18.078 6.832 22 12 22c4.647 0 8.554-3.17 9.676-7.465l-.092-.132c-.473-.59-1.322-1.403-2.4-1.403c-1.689 0-1.689 2-3.378 2c-.714 0-1.328-.357-1.798-.77a3 3 0 0 1-4.61-.739zm10.14-8.083l-.058.053l-1 1a.75.75 0 1 0 1.06 1.06l.905-.904q-.409-.64-.907-1.209M5.417 4.472q.025.03.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905q-.64.41-1.209.907m5.053.058a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06zm6.13.92a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 1.2.9zM8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 1 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m9.056 2.794a.75.75 0 1 1-1.499.07l-.066-1.412a.75.75 0 0 1 1.498-.07zm.971 1.705a.75.75 0 0 0 1.059.067l1.678-1.478a.75.75 0 1 0-.992-1.126L18.504 11a.75.75 0 0 0-.067 1.059M5.525 8.167a.75.75 0 1 1 1.365-.62l.585 1.286a.75.75 0 1 1-1.365.621z"></svg:path><svg:path fill="currentColor" d="M6.943 10.895a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M2.856 8.98a.75.75 0 0 1 1.497-.084l.079 1.412a.75.75 0 0 1-1.498.083z"></svg:path>`,
})
export class SolarDonutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBrokenIcon],svg[solar-donut-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403"></svg:path><svg:path stroke-linecap="round" d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366m7.516 1.611l.066 1.412m3.962-.304L19 11.563M7 5L6 4m.792 5.144l-.585-1.288m-.542 4.786L6.5 11.5m-2.817-1.15l-.079-1.412M7 20.662A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"></svg:path></svg:g>`,
})
export class SolarDonutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutLineDuotoneIcon],svg[solar-donut-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.5 7L16 5"></svg:path><svg:path stroke-linecap="round" d="m19 7l1-1" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m12 5l-1-1"></svg:path><svg:path stroke-linecap="round" d="m10.5 7l-1.366.366m7.516 1.611l.066 1.412" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M20.678 10.085L19 11.563"></svg:path><svg:path stroke-linecap="round" d="M7 5L6 4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6.792 9.144l-.585-1.288m-.542 4.786L6.5 11.5"></svg:path><svg:path stroke-linecap="round" d="m3.683 10.35l-.079-1.412" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDonutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutLinearIcon],svg[solar-donut-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403"></svg:path><svg:path stroke-linecap="round" d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366m7.516 1.611l.066 1.412m3.962-.304L19 11.563M7 5L6 4m.792 5.144l-.585-1.288m-.542 4.786L6.5 11.5m-2.817-1.15l-.079-1.412"></svg:path></svg:g>`,
})
export class SolarDonutLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutOutlineIcon],svg[solar-donut-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.924 10.207a9.3 9.3 0 0 0-.15 2.466l.066.054c.22.176.53.41.892.643c.757.488 1.6.88 2.268.88c.436 0 .964-.169 1.518-.448c.337-.17.659-.367.943-.56a3.75 3.75 0 1 1 6.658.841c.222.107.452.167.686.167c.463 0 .682-.22 1.117-.734l.032-.038c.361-.428.889-1.054 1.826-1.198a.75.75 0 0 1-.276-1.28l1.678-1.478a.75.75 0 0 1 .686-.163a9.2 9.2 0 0 0-.977-2.189l-.36.36a.75.75 0 1 1-1.061-1.06l.524-.524A9.23 9.23 0 0 0 12 2.75c-1.77 0-3.424.497-4.83 1.36l.36.36a.75.75 0 0 1-1.06 1.06l-.524-.524a9.3 9.3 0 0 0-2.377 3.182a.75.75 0 0 1 .784.708l.079 1.412a.75.75 0 1 1-1.498.083zm18.23.458l-1.659 1.46a.8.8 0 0 1-.2.127c.757.029 1.398.347 1.904.728a9.4 9.4 0 0 0-.045-2.315m-.303 4.032c-.442-.499-1.032-.947-1.667-.947c-.463 0-.681.22-1.116.734l-.032.038c-.41.487-1.036 1.228-2.23 1.228c-.708 0-1.316-.257-1.803-.58c-.58.367-1.266.58-2.003.58a3.74 3.74 0 0 1-2.767-1.22c-.31.208-.664.423-1.04.612c-.642.323-1.417.608-2.193.608c-1.013 0-2.047-.488-2.82-.957a9.254 9.254 0 0 0 17.67-.096M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m9.22-8.53a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06m5.98.93a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.226 2.406a.75.75 0 0 1-.53.918l-1.366.366a.75.75 0 1 1-.388-1.448l1.366-.366a.75.75 0 0 1 .918.53m-5.327.368a.75.75 0 0 1 .993.372l.585 1.287a.75.75 0 0 1-1.365.621l-.586-1.287a.75.75 0 0 1 .373-.993m10.718 1.053a.75.75 0 0 1 .784.714l.066 1.413a.75.75 0 1 1-1.498.07l-.066-1.412a.75.75 0 0 1 .714-.785M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-5.057 1.145a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarDonutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownBoldIcon],svg[solar-double-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z"></svg:path>`,
})
export class SolarDoubleAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownBoldDuotoneIcon],svg[solar-double-alt-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownBrokenIcon],svg[solar-double-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 11l-7 6l-1.75-1.5M5 11l2.333 2M5 7l7 6l1.75-1.5M19 7l-2.333 2"></svg:path>`,
})
export class SolarDoubleAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownLineDuotoneIcon],svg[solar-double-alt-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19 11l-7 6l-7-6"></svg:path><svg:path d="m19 7l-7 6l-7-6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownLinearIcon],svg[solar-double-alt-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19 11l-7 6l-7-6"></svg:path><svg:path d="m19 7l-7 6l-7-6"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownOutlineIcon],svg[solar-double-alt-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 6.512a.75.75 0 0 1 1.058-.081L12 12.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057m0 4a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftBoldIcon],svg[solar-double-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.488 4.43a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.75 5a.75.75 0 0 0-1.32-.488l-6 7a.75.75 0 0 0 0 .976l6 7A.75.75 0 0 0 17.75 19z"></svg:path>`,
})
export class SolarDoubleAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftBoldDuotoneIcon],svg[solar-double-alt-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 19a.75.75 0 0 1-1.32.488l-6-7a.75.75 0 0 1 0-.976l6-7A.75.75 0 0 1 17.75 5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.488 19.57a.75.75 0 0 0 .081-1.058L7.988 12l5.581-6.512a.75.75 0 1 0-1.138-.976l-6 7a.75.75 0 0 0 0 .976l6 7a.75.75 0 0 0 1.057.082" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftBrokenIcon],svg[solar-double-alt-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 19l-6-7l1.5-1.75M13 5l-2 2.333M17 5l-6 7l1.5 1.75M17 19l-2-2.333"></svg:path>`,
})
export class SolarDoubleAltArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftLineDuotoneIcon],svg[solar-double-alt-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13 19l-6-7l6-7"></svg:path><svg:path d="m17 19l-6-7l6-7" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftLinearIcon],svg[solar-double-alt-arrow-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13 19l-6-7l6-7"></svg:path><svg:path d="m17 19l-6-7l6-7"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftOutlineIcon],svg[solar-double-alt-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.488 4.43a.75.75 0 0 1 .081 1.058L11.988 12l5.581 6.512a.75.75 0 1 1-1.139.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.058-.081m-4 0a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightBoldIcon],svg[solar-double-alt-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.512 4.43a.75.75 0 0 0-.081 1.058L16.012 12l-5.581 6.512a.75.75 0 1 0 1.138.976l6-7a.75.75 0 0 0 0-.976l-6-7a.75.75 0 0 0-1.057-.081" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.25 5a.75.75 0 0 1 1.32-.488l6 7a.75.75 0 0 1 0 .976l-6 7A.75.75 0 0 1 6.25 19z"></svg:path>`,
})
export class SolarDoubleAltArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightBoldDuotoneIcon],svg[solar-double-alt-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 19a.75.75 0 0 0 1.32.488l6-7a.75.75 0 0 0 0-.976l-6-7A.75.75 0 0 0 6.25 5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.512 19.57a.75.75 0 0 1-.081-1.058L16.012 12l-5.581-6.512a.75.75 0 1 1 1.139-.976l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.058.082" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightBrokenIcon],svg[solar-double-alt-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 19l6-7l-1.5-1.75M11 5l2 2.333M7 5l6 7l-1.5 1.75M7 19l2-2.333"></svg:path>`,
})
export class SolarDoubleAltArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightLineDuotoneIcon],svg[solar-double-alt-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11 19l6-7l-6-7"></svg:path><svg:path d="m7 19l6-7l-6-7" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightLinearIcon],svg[solar-double-alt-arrow-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11 19l6-7l-6-7"></svg:path><svg:path d="m7 19l6-7l-6-7"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightOutlineIcon],svg[solar-double-alt-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L12.012 12L6.431 5.488a.75.75 0 0 1 .08-1.057m4 0a.75.75 0 0 1 1.058.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.14-.976L16.013 12l-5.581-6.512a.75.75 0 0 1 .081-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpBoldIcon],svg[solar-double-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"></svg:path>`,
})
export class SolarDoubleAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpBoldDuotoneIcon],svg[solar-double-alt-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpBrokenIcon],svg[solar-double-alt-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 13l-7-6l-1.75 1.5M5 13l2.333-2M5 17l7-6l1.75 1.5M19 17l-2.333-2"></svg:path>`,
})
export class SolarDoubleAltArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpLineDuotoneIcon],svg[solar-double-alt-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19 13l-7-6l-7 6"></svg:path><svg:path d="m19 17l-7-6l-7 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpLinearIcon],svg[solar-double-alt-arrow-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19 13l-7-6l-7 6"></svg:path><svg:path d="m19 17l-7-6l-7 6"></svg:path></svg:g>`,
})
export class SolarDoubleAltArrowUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpOutlineIcon],svg[solar-double-alt-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.512 6.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 7.987l-6.512 5.581a.75.75 0 1 1-.976-1.138zm-7 10l7-6a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 11.987l-6.512 5.581a.75.75 0 1 1-.976-1.138" clip-rule="evenodd"></svg:path>`,
})
export class SolarDoubleAltArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadBoldIcon],svg[solar-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 0-.75.75v10.973l-1.68-1.961a.75.75 0 1 0-1.14.976l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.976l-1.68 1.96V2a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.25 9v.378a2.249 2.249 0 0 1 2.458 3.586l-3 3.5a2.25 2.25 0 0 1-3.416 0l-3-3.5A2.25 2.25 0 0 1 9.75 9.378V9H8c-2.828 0-4.243 0-5.121.879C2 10.757 2 12.172 2 15v1c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9z"></svg:path>`,
})
export class SolarDownloadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadBoldDuotoneIcon],svg[solar-download-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-1c0-2.828 0-4.242-.879-5.12C20.242 9 18.828 9 16 9H8c-2.829 0-4.243 0-5.122.88C2 10.757 2 12.17 2 14.997V16c0 2.829 0 4.243.879 5.122C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 0-.75.75v10.973l-1.68-1.961a.75.75 0 1 0-1.14.976l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.976l-1.68 1.96V2a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadBrokenIcon],svg[solar-download-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121c-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122c.3.3.662.497 1.121.627"></svg:path><svg:path stroke-linejoin="round" d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"></svg:path></svg:g>`,
})
export class SolarDownloadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadLineDuotoneIcon],svg[solar-download-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"></svg:path></svg:g>`,
})
export class SolarDownloadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadLinearIcon],svg[solar-download-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"></svg:path><svg:path stroke-linejoin="round" d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"></svg:path></svg:g>`,
})
export class SolarDownloadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticBoldIcon],svg[solar-download-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z"></svg:path><svg:path fill="currentColor" d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191"></svg:path>`,
})
export class SolarDownloadMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticBoldDuotoneIcon],svg[solar-download-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 14.25a.75.75 0 0 1 .75.75c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191a.75.75 0 0 1 1.5 0v.055c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V15a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path><svg:path d="M12 16.75a.75.75 0 0 0 .553-.244l4-4.375a.75.75 0 1 0-1.107-1.012l-2.696 2.95V3a.75.75 0 0 0-1.5 0v11.068l-2.696-2.95a.75.75 0 0 0-1.108 1.013l4 4.375a.75.75 0 0 0 .554.244"></svg:path></svg:g>`,
})
export class SolarDownloadMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticBrokenIcon],svg[solar-download-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v13m0 0l4-4.375M12 16l-4-4.375M15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15m18 0c0 2.828 0 4.243-.879 5.121c-.3.3-.662.498-1.121.628"></svg:path>`,
})
export class SolarDownloadMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticLineDuotoneIcon],svg[solar-download-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15" opacity=".5"></svg:path><svg:path d="M12 3v13m0 0l4-4.375M12 16l-4-4.375"></svg:path></svg:g>`,
})
export class SolarDownloadMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticLinearIcon],svg[solar-download-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15M12 3v13m0 0l4-4.375M12 16l-4-4.375"></svg:path>`,
})
export class SolarDownloadMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticOutlineIcon],svg[solar-download-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z"></svg:path><svg:path fill="currentColor" d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191"></svg:path>`,
})
export class SolarDownloadMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadOutlineIcon],svg[solar-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v10.973l1.68-1.961a.75.75 0 1 1 1.14.976l-3 3.5a.75.75 0 0 1-1.14 0l-3-3.5a.75.75 0 1 1 1.14-.976l1.68 1.96V2a.75.75 0 0 1 .75-.75M6.996 8.252a.75.75 0 0 1 .008 1.5c-1.093.006-1.868.034-2.457.142c-.566.105-.895.272-1.138.515c-.277.277-.457.666-.556 1.4c-.101.755-.103 1.756-.103 3.191v1c0 1.436.002 2.437.103 3.192c.099.734.28 1.122.556 1.4c.277.276.665.456 1.4.555c.754.102 1.756.103 3.191.103h8c1.435 0 2.436-.001 3.192-.103c.734-.099 1.122-.279 1.399-.556s.457-.665.556-1.399c.101-.755.103-1.756.103-3.192v-1c0-1.435-.002-2.436-.103-3.192c-.099-.733-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.515c-.589-.108-1.364-.136-2.457-.142a.75.75 0 1 1 .008-1.5c1.082.006 1.983.032 2.72.167c.758.14 1.403.405 1.928.93c.602.601.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v1.11c0 1.368 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-1.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.525-.524 1.17-.79 1.928-.929c.737-.135 1.638-.161 2.72-.167" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareBoldIcon],svg[solar-download-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10-5.75a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V7a.75.75 0 0 1 .75-.75m-4 10a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareBoldDuotoneIcon],svg[solar-download-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v5.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72zM8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarDownloadSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareBrokenIcon],svg[solar-download-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 7v7m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M16 17H8m14-5c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarDownloadSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareLineDuotoneIcon],svg[solar-download-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v7m0 0l3-3m-3 3l-3-3"></svg:path><svg:path stroke-linecap="round" d="M16 17H8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDownloadSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareLinearIcon],svg[solar-download-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v7m0 0l3-3m-3 3l-3-3"></svg:path><svg:path stroke-linecap="round" d="M16 17H8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarDownloadSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareOutlineIcon],svg[solar-download-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V7a.75.75 0 0 1 .75-.75M7.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareBoldIcon],svg[solar-download-twice-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M9.25 7a.75.75 0 0 0-1.5 0v4.929l-1.174-1.41a.75.75 0 0 0-1.152.961l2.5 3a.75.75 0 0 0 1.152 0l2.5-3a.75.75 0 0 0-1.152-.96L9.25 11.929zm6.25-.75a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 0 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75m-9.5 10a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadTwiceSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareBoldDuotoneIcon],svg[solar-download-twice-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.5 6.25a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75m7 0a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75m-9.5 10a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarDownloadTwiceSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareBrokenIcon],svg[solar-download-twice-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8.5 7v7m0 0l2.5-3m-2.5 3L6 11m9.5-4v7m0 0l2.5-3m-2.5 3L13 11"></svg:path><svg:path d="M18 17H6m16-5c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarDownloadTwiceSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareLineDuotoneIcon],svg[solar-download-twice-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 7v7m0 0l2.5-3m-2.5 3L6 11m9.5-4v7m0 0l2.5-3m-2.5 3L13 11"></svg:path><svg:path stroke-linecap="round" d="M18 17H6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDownloadTwiceSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareLinearIcon],svg[solar-download-twice-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 7v7m0 0l2.5-3m-2.5 3L6 11m9.5-4v7m0 0l2.5-3m-2.5 3L13 11"></svg:path><svg:path stroke-linecap="round" d="M18 17H6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarDownloadTwiceSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareOutlineIcon],svg[solar-download-twice-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 7a.75.75 0 0 0-1.5 0v4.929l-1.174-1.41a.75.75 0 0 0-1.152.961l2.5 3a.75.75 0 0 0 1.152 0l2.5-3a.75.75 0 0 0-1.152-.96L9.25 11.929zm7 0a.75.75 0 0 0-1.5 0v4.929l-1.174-1.41a.75.75 0 0 0-1.152.961l2.5 3a.75.75 0 0 0 1.152 0l2.5-3a.75.75 0 0 0-1.152-.96l-1.174 1.409zm-11 10a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadTwiceSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2BoldIcon],svg[solar-dropper-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12.25v-1.5h-3a.75.75 0 0 1 0-1.5h2.998c-.01-1.397-.081-2.162-.584-2.664C20.828 6 19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.75 7.75 0 0 0 4.487 1.99v1.027a.75.75 0 0 0 1.5 0v-1.027a7.76 7.76 0 0 0 4.487-1.99A2.33 2.33 0 0 0 22 16.507V13.75h-2a.75.75 0 0 1 0-1.5zM16 15c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083" clip-rule="evenodd"></svg:path>`,
})
export class SolarDropper2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2BoldDuotoneIcon],svg[solar-dropper-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.998 9.25H19a.75.75 0 0 0 0 1.5h3v1.5h-2a.75.75 0 0 0 0 1.5h2v2.757c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03zm.956 18.122v1.026a.75.75 0 1 0 1.5 0v-1.026a8 8 0 0 1-1.5 0" opacity=".5"></svg:path>`,
})
export class SolarDropper2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2BrokenIcon],svg[solar-dropper-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10h-3"></svg:path><svg:path d="M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M22 13h-2m-4 8v1m-6-12c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"></svg:path><svg:path stroke-linecap="round" d="M2 22v-2M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066l-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"></svg:path></svg:g>`,
})
export class SolarDropper2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2LineDuotoneIcon],svg[solar-dropper-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10h-3"></svg:path><svg:path d="M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M22 13h-2"></svg:path><svg:path stroke-linecap="round" d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507Z"></svg:path></svg:g>`,
})
export class SolarDropper2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2LinearIcon],svg[solar-dropper-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10h-3"></svg:path><svg:path d="M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M22 13h-2m-4 8v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6"></svg:path><svg:path stroke-linecap="round" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507Z"></svg:path></svg:g>`,
})
export class SolarDropper2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2OutlineIcon],svg[solar-dropper-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.175 10.101a1.61 1.61 0 0 0-2.35 0a9 9 0 0 0-.986 1.215c-.285.43-.589 1.008-.589 1.6c0 1.536 1.203 2.834 2.75 2.834s2.75-1.298 2.75-2.833c0-.593-.304-1.17-.589-1.601a9 9 0 0 0-.986-1.215m-1.261 1.032c.029-.03.06-.04.086-.04a.12.12 0 0 1 .087.04c.278.294.587.653.822 1.01c.254.383.341.646.341.774c0 .765-.588 1.333-1.25 1.333s-1.25-.568-1.25-1.333c0-.128.087-.39.34-.775c.236-.356.545-.715.824-1.009"></svg:path><svg:path d="M11.94 1.25a3.75 3.75 0 0 1 2.354.852l.003.003l.035.029l.07.058c.257.207.546.35.848.428V2a.75.75 0 0 1 1.5 0v.489a2.2 2.2 0 0 0 .632-.432l.065-.065l.523-.522a.75.75 0 1 1 1.06 1.06l-.527.527l-.076.076a3.74 3.74 0 0 1-1.677.94V5.25h1.302c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.344.08 2.243v6.559c0 .868-.366 1.696-1.008 2.28a8.5 8.5 0 0 1-4.992 2.19V22a.75.75 0 0 1-1.5 0v-1.023a8.5 8.5 0 0 1-4.992-2.19a3.08 3.08 0 0 1-1.008-2.28V9.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.344-.08 2.242-.08h1.302V4.149a3.74 3.74 0 0 1-1.79-.79l-.083-.069l-.004-.003l-.031-.026l-.002-.001a2.25 2.25 0 0 0-1.408-.51H8l-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v14.25a.75.75 0 0 1-1.5 0V7.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.996m7.06 8h2.248c-.004-.57-.018-1-.065-1.345c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v6.507c0 .446.188.871.518 1.171a7.03 7.03 0 0 0 9.464 0c.33-.3.518-.725.518-1.171V13.75H20a.75.75 0 0 1 0-1.5h1.25v-1.5H19a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarDropper2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3BoldIcon],svg[solar-dropper-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 10v6.507c0 .657-.277 1.284-.763 1.726a7.75 7.75 0 0 1-4.487 1.99v1.027a.75.75 0 0 1-1.5 0v-1.027a7.75 7.75 0 0 1-4.487-1.99A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10m-8 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm4-3.833c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z"></svg:path>`,
})
export class SolarDropper3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3BoldDuotoneIcon],svg[solar-dropper-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507M13.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M16 13.5c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03zm.956 18.122v1.026a.75.75 0 1 0 1.5 0v-1.026a8 8 0 0 1-1.5 0" opacity=".5"></svg:path>`,
})
export class SolarDropper3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3BrokenIcon],svg[solar-dropper-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 16h-4"></svg:path><svg:path d="M18 11.417c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M16 21v1m-6-12c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"></svg:path><svg:path stroke-linecap="round" d="M2 22v-2M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066l-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"></svg:path></svg:g>`,
})
export class SolarDropper3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3LineDuotoneIcon],svg[solar-dropper-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507ZM18 16h-4"></svg:path><svg:path d="M18 11.417c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDropper3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3LinearIcon],svg[solar-dropper-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507ZM18 16h-4"></svg:path><svg:path d="M18 11.417c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6"></svg:path></svg:g>`,
})
export class SolarDropper3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3OutlineIcon],svg[solar-dropper-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.175 8.602a1.61 1.61 0 0 0-2.35 0a9 9 0 0 0-.986 1.214c-.285.43-.589 1.008-.589 1.6c0 1.536 1.203 2.834 2.75 2.834s2.75-1.298 2.75-2.833c0-.593-.304-1.17-.589-1.601a9 9 0 0 0-.986-1.214m-1.261 1.031c.029-.03.06-.04.086-.04a.12.12 0 0 1 .087.04c.278.294.587.653.822 1.01c.254.383.341.646.341.774c0 .765-.588 1.333-1.25 1.333s-1.25-.568-1.25-1.333c0-.128.087-.39.34-.775c.236-.356.545-.715.824-1.009" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.94 1.25a3.75 3.75 0 0 1 2.354.852l.003.003l.035.029l.07.058c.257.207.546.35.848.428V2a.75.75 0 0 1 1.5 0v.489a2.2 2.2 0 0 0 .632-.432l.065-.065l.523-.522a.75.75 0 1 1 1.06 1.06l-.527.527l-.076.076a3.74 3.74 0 0 1-1.677.94V5.25h1.302c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v6.559c0 .868-.366 1.696-1.008 2.28a8.5 8.5 0 0 1-4.992 2.19V22a.75.75 0 0 1-1.5 0v-1.023a8.5 8.5 0 0 1-4.992-2.19a3.08 3.08 0 0 1-1.008-2.28V9.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.344-.08 2.242-.08h1.302V4.149a3.74 3.74 0 0 1-1.79-.79l-.083-.069l-.004-.003l-.031-.026l-.002-.001a2.25 2.25 0 0 0-1.408-.51H8l-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v14.25a.75.75 0 0 1-1.5 0V7.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.996m-.824 5.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066h4c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v6.507c0 .446-.188.871-.518 1.171a7.03 7.03 0 0 1-9.464 0c-.33-.3-.518-.725-.518-1.171V10c0-.964.002-1.612.066-2.095c.063-.461.17-.659.3-.789" clip-rule="evenodd"></svg:path>`,
})
export class SolarDropper3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperBoldIcon],svg[solar-dropper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.75v1.5h-3a.75.75 0 0 0 0 1.5h3v2.757c0 .657-.277 1.284-.763 1.726a7.75 7.75 0 0 1-4.487 1.99v1.027a.75.75 0 0 1-1.5 0v-1.027a7.75 7.75 0 0 1-4.487-1.99A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664H18a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z"></svg:path>`,
})
export class SolarDropperBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperBoldDuotoneIcon],svg[solar-dropper-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.75v2.757c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664H18a.75.75 0 0 0 0 1.5h4v1.5h-3a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M15.25 20.224v1.026a.75.75 0 1 0 1.5 0v-1.026a8 8 0 0 1-1.5 0m-.956-18.122a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z" opacity=".5"></svg:path>`,
})
export class SolarDropperBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperBrokenIcon],svg[solar-dropper-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10h-4m4 3h-3m-3 8v1M2 22v-2M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066l-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"></svg:path><svg:path d="M10 10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"></svg:path></svg:g>`,
})
export class SolarDropperBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperLineDuotoneIcon],svg[solar-dropper-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10h-4m4 3h-3"></svg:path><svg:path d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6" opacity=".5"></svg:path><svg:path d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507Z"></svg:path></svg:g>`,
})
export class SolarDropperLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperLinearIcon],svg[solar-dropper-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10h-4m4 3h-3m-3 8v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028l.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6"></svg:path><svg:path d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507Z"></svg:path></svg:g>`,
})
export class SolarDropperLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2BoldIcon],svg[solar-dropper-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 8v7.883c0 .76-.32 1.487-.88 2.001a9.02 9.02 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.02 9.02 0 0 1-5.37-2.352a2.72 2.72 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8m-7 5c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083m-2.75 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.733 3a2 2 0 0 0-3.465 0z"></svg:path>`,
})
export class SolarDropperMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2BoldDuotoneIcon],svg[solar-dropper-minimalistic-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.998 7.25H17a.75.75 0 0 0 0 1.5h2V8q0-.403-.002-.75m.002 3h-2a.75.75 0 0 0 0 1.5h2zm0 3h-2a.75.75 0 0 0 0 1.5h2zM14 4a2 2 0 1 0-4 0zm-2.75 16.235q.75.063 1.5 0v1.015a.75.75 0 0 1-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3"></svg:path>`,
})
export class SolarDropperMinimalistic2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2BrokenIcon],svg[solar-dropper-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 16h-4"></svg:path><svg:path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0"></svg:path><svg:path stroke-linecap="round" d="M5 8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0a2.72 2.72 0 0 1-.88-2V12"></svg:path></svg:g>`,
})
export class SolarDropperMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2LineDuotoneIcon],svg[solar-dropper-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM14 16h-4"></svg:path><svg:path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDropperMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2LinearIcon],svg[solar-dropper-minimalistic-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM14 16h-4"></svg:path><svg:path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class SolarDropperMinimalistic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2OutlineIcon],svg[solar-dropper-minimalistic-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.175 8.101a1.61 1.61 0 0 0-2.35 0a9 9 0 0 0-.986 1.215c-.285.43-.589 1.008-.589 1.6c0 1.536 1.203 2.834 2.75 2.834s2.75-1.298 2.75-2.833c0-.593-.304-1.17-.589-1.601a9 9 0 0 0-.986-1.215m-1.261 1.032c.029-.03.06-.04.086-.04c.027 0 .057.01.086.04c.28.294.588.653.823 1.01c.254.383.341.646.341.774c0 .765-.588 1.333-1.25 1.333s-1.25-.568-1.25-1.333c0-.128.087-.39.34-.775c.236-.356.545-.715.824-1.009" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.354 3.25a2.751 2.751 0 0 1 5.293 0h.405c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v7.935c0 .97-.407 1.897-1.123 2.554a9.77 9.77 0 0 1-5.877 2.551V22a.75.75 0 0 1-1.5 0v-1.012a9.77 9.77 0 0 1-5.877-2.551a3.47 3.47 0 0 1-1.123-2.554V7.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08zm1.646 0a1.248 1.248 0 0 1 2 0zm4 1.5c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v7.883c0 .55-.231 1.076-.637 1.448a8.303 8.303 0 0 1-11.226 0a1.97 1.97 0 0 1-.637-1.448V8c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3C7.388 4.753 8.036 4.75 9 4.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDropperMinimalistic2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticBoldIcon],svg[solar-dropper-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 11.75v1.5h-2a.75.75 0 0 0 0 1.5h2v1.133c0 .76-.32 1.487-.88 2.001a9.02 9.02 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.02 9.02 0 0 1-5.37-2.352a2.72 2.72 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664H17a.75.75 0 0 0 0 1.5h2v1.5h-2a.75.75 0 0 0 0 1.5zM12 14c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.733 3a2 2 0 0 0-3.465 0z"></svg:path>`,
})
export class SolarDropperMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticBoldDuotoneIcon],svg[solar-dropper-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3m4.998-4.667H17a.75.75 0 0 0 0 1.5h2V8q0-.403-.002-.75m.002 3h-2a.75.75 0 0 0 0 1.5h2zm0 3h-2a.75.75 0 0 0 0 1.5h2zM14 4a2 2 0 1 0-4 0zm-2.75 16.235q.75.063 1.5 0v1.015a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarDropperMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticBrokenIcon],svg[solar-dropper-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0a2.72 2.72 0 0 1-.88-2V12m14-4h-2m2 6h-2"></svg:path><svg:path d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M19 11h-2m-5 10v1m2-18a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class SolarDropperMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticLineDuotoneIcon],svg[solar-dropper-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM19 8h-2m2 6h-2"></svg:path><svg:path d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M19 11h-2"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDropperMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticLinearIcon],svg[solar-dropper-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM19 8h-2m2 6h-2"></svg:path><svg:path d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M19 11h-2m-5 10v1m2-18a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class SolarDropperMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticOutlineIcon],svg[solar-dropper-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 8h-2m2 6h-2m2-3h-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.175 9.101a1.61 1.61 0 0 0-2.35 0a9 9 0 0 0-.986 1.215c-.285.43-.589 1.008-.589 1.6c0 1.536 1.203 2.834 2.75 2.834s2.75-1.298 2.75-2.833c0-.593-.304-1.17-.589-1.601a9 9 0 0 0-.986-1.215m-1.261 1.032c.029-.03.06-.04.086-.04c.027 0 .057.01.086.04c.28.294.588.653.823 1.01c.254.383.341.646.341.774c0 .765-.588 1.333-1.25 1.333s-1.25-.568-1.25-1.333c0-.128.087-.39.34-.775c.236-.356.545-.715.824-1.009" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.354 3.25a2.751 2.751 0 0 1 5.293 0h.405c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v7.935c0 .97-.407 1.897-1.123 2.554a9.77 9.77 0 0 1-5.877 2.551V22a.75.75 0 0 1-1.5 0v-1.012a9.77 9.77 0 0 1-5.877-2.551a3.47 3.47 0 0 1-1.123-2.554V7.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08zm1.646 0a1.248 1.248 0 0 1 2 0zm-2 1.5c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C5.753 6.388 5.75 7.036 5.75 8v7.883c0 .55.231 1.076.637 1.448a8.303 8.303 0 0 0 11.226 0c.406-.372.637-.897.637-1.448V8c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarDropperMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperOutlineIcon],svg[solar-dropper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10h-4m4 3h-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.94 1.25a3.75 3.75 0 0 1 2.354.852l.003.003l.035.029l.07.058c.257.207.546.35.848.428V2a.75.75 0 0 1 1.5 0v.489a2.2 2.2 0 0 0 .632-.432l.065-.065l.523-.522a.75.75 0 1 1 1.06 1.06l-.527.527l-.076.076a3.74 3.74 0 0 1-1.677.94V5.25h1.302c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.344.08 2.243v6.559c0 .868-.366 1.696-1.008 2.28a8.5 8.5 0 0 1-4.992 2.19V22a.75.75 0 0 1-1.5 0v-1.023a8.5 8.5 0 0 1-4.992-2.19a3.08 3.08 0 0 1-1.008-2.28V9.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.344-.08 2.242-.08h1.302V4.149a3.74 3.74 0 0 1-1.79-.79l-.083-.069l-.004-.003l-.031-.026l-.002-.001a2.25 2.25 0 0 0-1.408-.51H8l-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v14.25a.75.75 0 0 1-1.5 0V7.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.996m-.035 5.567c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v6.507c0 .446.188.871.518 1.171a7.03 7.03 0 0 0 9.464 0c.33-.3.518-.725.518-1.171V10c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarDropperOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellBoldIcon],svg[solar-dumbbell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-4c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 7 19.932 7 19 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C16 8.602 16 9.568 16 10.5H8c0-.932 0-1.898-.152-2.265a2 2 0 0 0-1.083-1.083C6.398 7 5.932 7 5 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 8.602 2 9.068 2 10v4c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 17 4.068 17 5 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C8 15.398 8 14.432 8 13.5h8c0 .932 0 1.898.152 2.265a2 2 0 0 0 1.083 1.083C17.602 17 18.068 17 19 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 15.398 22 14.932 22 14"></svg:path>`,
})
export class SolarDumbbellBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellBoldDuotoneIcon],svg[solar-dumbbell-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 10v4c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 17 19.932 17 19 17s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 15.398 16 14.432 16 13.5v-3c0-.932 0-1.898.152-2.265a2 2 0 0 1 1.083-1.083C17.602 7 18.068 7 19 7s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 8.602 22 9.068 22 10m-14 .5v3c0 .932 0 1.898-.152 2.265a2 2 0 0 1-1.083 1.083C6.398 17 5.932 17 5 17s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 15.398 2 14.932 2 14v-4c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 7 4.068 7 5 7s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C8 8.602 8 9.568 8 10.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 10.5H8v3h8z" opacity=".5"></svg:path>`,
})
export class SolarDumbbellBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellBrokenIcon],svg[solar-dumbbell-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.235 16.848l-.287.693zM16 13.5h.75a.75.75 0 0 0-.75-.75zm.152 2.265l-.693.287zm5.696 0l.693.287zm-1.083 1.083l-.287-.693zm0-9.696l-.287.693zm.39 1.37a.75.75 0 1 0 1.386-.574zm-3.92-1.37l-.287-.693zM16 10.5v.75a.75.75 0 0 0 .75-.75zm.152-2.265l-.693-.287zM3.235 16.848l-.287.693zm-1.083-1.083l-.693.287zM8 13.5v-.75a.75.75 0 0 0-.75.75zm-.152 2.265l.693.287zm-1.083 1.083l.287.693zm0-9.696l.287-.693zM8 10.5h-.75c0 .414.336.75.75.75zm-.152-2.265l.693-.287zM3.235 7.152l-.287-.693zM2.152 8.235l-.693-.287zM22.75 12a.75.75 0 0 0-1.5 0zM19 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zm-3.75-2.75c0 .461 0 .954.02 1.38c.01.213.026.421.051.609c.024.176.063.382.138.563l1.386-.574l-.012-.045a2 2 0 0 1-.026-.147a6 6 0 0 1-.039-.477a30 30 0 0 1-.018-1.309zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM21.25 14c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zM19 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM19 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zm1.478.095c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM19 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017zm-2.25 4.25c0-.47 0-.926.018-1.309q.014-.286.04-.477q.012-.093.025-.147l.012-.045l-1.386-.574a2.3 2.3 0 0 0-.138.563a7 7 0 0 0-.051.61c-.02.425-.02.918-.02 1.379zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM2.75 14v-4h-1.5v4zM5 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zM1.25 14c0 .456 0 .835.02 1.145c.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 14zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM7.25 13.5c0 .47 0 .926-.018 1.309q-.014.286-.04.477a2 2 0 0 1-.025.147l-.012.045l1.386.574c.075-.181.114-.387.138-.563c.025-.188.041-.396.051-.61c.02-.425.02-.918.02-1.379zM5 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17 17 0 0 1 5 16.25zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM5 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zm3.75 2.75c0-.461 0-.954-.02-1.38a7 7 0 0 0-.051-.609a2.3 2.3 0 0 0-.138-.563l-1.386.574l.012.045q.012.053.026.147a6 6 0 0 1 .039.477c.018.383.018.838.018 1.309zM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM5 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17 17 0 0 1 5 7.75zM2.75 10c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907c-.021.31-.021.69-.021 1.145zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM8 11.25h8v-1.5H8zm8 1.5H8v1.5h8zm5.25-.75v2h1.5v-2z"></svg:path>`,
})
export class SolarDumbbellBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeBoldIcon],svg[solar-dumbbell-large-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.924 18.607l1.469 1.469c.692.692 1.038 1.038 1.468 1.038s.776-.346 1.468-1.038l.367-.367l.367.367l.735.734c.686.686 1.029 1.029 1.432 1.137c.264.07.542.07.806 0c.403-.108.746-.451 1.432-1.137s1.03-1.03 1.137-1.433a1.55 1.55 0 0 0 0-.806c-.107-.403-.45-.746-1.137-1.432l-1.1-1.101l3.67-3.67l1.101 1.1c.686.686 1.03 1.03 1.432 1.137c.264.071.542.071.806 0c.404-.107.747-.45 1.433-1.137c.686-.686 1.029-1.029 1.137-1.432c.07-.264.07-.542 0-.806c-.108-.403-.451-.746-1.137-1.432l-.734-.735l-.371-.363l.37-.37c.693-.693 1.039-1.039 1.039-1.469s-.346-.776-1.038-1.468l-1.469-1.469c-.692-.692-1.038-1.038-1.468-1.038s-.776.346-1.468 1.038l-.367.368l-1.102-1.102c-.686-.686-1.029-1.029-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.403.108-.746.451-1.432 1.137s-1.03 1.03-1.137 1.433a1.55 1.55 0 0 0 0 .806c.107.403.45.746 1.137 1.432l1.1 1.101l-3.67 3.67l-1.101-1.1c-.686-.686-1.03-1.03-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.404.107-.747.45-1.433 1.137c-.686.686-1.029 1.029-1.137 1.432c-.07.264-.07.542 0 .806c.108.403.451.746 1.137 1.432l1.102 1.102l-.368.367c-.692.692-1.038 1.038-1.038 1.468s.346.776 1.038 1.468"></svg:path>`,
})
export class SolarDumbbellLargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeBoldDuotoneIcon],svg[solar-dumbbell-large-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.292 15.304l4.404 4.405l.367.367l.735.734c.686.686 1.029 1.029 1.432 1.137c.264.07.542.07.806 0c.403-.108.746-.451 1.432-1.137s1.03-1.03 1.137-1.433a1.55 1.55 0 0 0 0-.806c-.107-.403-.45-.746-1.137-1.432l-1.1-1.101l-4.406-4.405l-1.101-1.101c-.686-.686-1.03-1.03-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.404.107-.747.45-1.433 1.137c-.686.686-1.029 1.029-1.137 1.432c-.07.264-.07.542 0 .806c.108.403.451.746 1.137 1.432zm11.746-2.937l-4.405-4.405l-1.101-1.101c-.686-.686-1.03-1.03-1.137-1.432a1.56 1.56 0 0 1 0-.806c.107-.404.45-.747 1.137-1.433c.686-.686 1.029-1.029 1.432-1.137c.264-.07.542-.07.806 0c.403.108.746.451 1.432 1.137l1.102 1.102l4.4 4.408l.372.363l.734.735c.686.686 1.029 1.029 1.137 1.432c.07.264.07.542 0 .806c-.108.403-.451.746-1.137 1.432s-1.03 1.03-1.433 1.137a1.55 1.55 0 0 1-.806 0c-.403-.107-.746-.45-1.432-1.137z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m18.608 3.924l1.468 1.468l.126.126c.608.61.912.94.912 1.343c0 .43-.346.776-1.038 1.468l-.371.37l-4.4-4.408l.366-.367c.692-.692 1.038-1.038 1.468-1.038s.777.346 1.469 1.038M5.393 20.076l-1.469-1.469c-.692-.692-1.038-1.038-1.038-1.468s.346-.776 1.038-1.468l.367-.367l4.405 4.405l-.367.367c-.692.692-1.038 1.038-1.468 1.038s-.776-.346-1.468-1.038m10.644-7.709l-3.67 3.67l-4.405-4.404l3.67-3.671z" opacity=".5"></svg:path>`,
})
export class SolarDumbbellLargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeBrokenIcon],svg[solar-dumbbell-large-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.393 20.076c.692.692 1.038 1.038 1.468 1.038s.776-.346 1.468-1.038a.52.52 0 0 1 .734 0l.735.734c.686.686 1.029 1.029 1.432 1.137c.264.07.542.07.806 0c.403-.108.746-.451 1.432-1.137s1.03-1.03 1.137-1.433a1.55 1.55 0 0 0 0-.806c-.107-.403-.45-.746-1.137-1.432l-1.1-1.101l3.67-3.67m2.57-8.444c-.693-.692-1.039-1.038-1.469-1.038s-.776.346-1.468 1.038m5.443 2.937c0 .43-.346.776-1.038 1.468a.52.52 0 0 0 0 .734l.734.735c.686.686 1.029 1.029 1.137 1.432c.07.264.07.542 0 .806c-.108.403-.451.746-1.137 1.432s-1.03 1.03-1.433 1.137a1.55 1.55 0 0 1-.806 0c-.403-.107-.746-.45-1.432-1.137l-1.101-1.1M3.924 15.67c-.692.692-1.038 1.038-1.038 1.468m3.608.367L3.19 14.202c-.686-.686-1.029-1.029-1.137-1.432a1.56 1.56 0 0 1 0-.806c.108-.403.451-.746 1.137-1.432s1.03-1.03 1.433-1.137c.264-.071.542-.071.806 0c.403.107.746.45 1.432 1.137l1.101 1.1m9.544-5.138L14.202 3.19c-.686-.686-1.029-1.029-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.403.108-.746.451-1.432 1.137s-1.03 1.03-1.137 1.433a1.55 1.55 0 0 0 0 .806c.107.403.45.746 1.137 1.432l1.1 1.101l-3.67 3.67m8.076.735l-2.203-2.202m-5.873 1.468l2.203 2.202"></svg:path>`,
})
export class SolarDumbbellLargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeLineDuotoneIcon],svg[solar-dumbbell-large-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m3.924 18.607l.53-.53zm1.469 1.469l-.53.53zm3.67 0l-.53.53zm.735.734l.53-.53zm4.807-1.433l-.724-.194zm-1.137-2.238l-.53.53zm1.137 1.432l-.724.194zm-2.569 3.376l-.194-.724zm-.806 0l.194-.724zm-9.177-9.983l.725.194zm1.137 2.238l-.53.53zM2.053 12.77l-.724.194zm2.57-3.375l.194.724zm2.238 1.137l-.53.53zM5.429 9.395l.194-.725zm13.948 5.21l-.194-.724zm-2.238-1.137l-.53.53zm1.432 1.137l.194-.724zm3.376-2.569l-.724-.194zm0-.806l-.724.194zm-9.983-9.177l-.194-.724zm2.238 1.137l-.53.53zM12.77 2.053l-.194.725zm-3.375 2.57l-.725-.195zm1.137 2.238l-.53.53zM9.395 5.429l.724-.194zm-2.37 11.547a.75.75 0 0 1-1.061 1.06zm11.01-11.012a.75.75 0 1 1-1.06 1.06zm-5.669 10.074l.53-.53zm3.67-3.67l.531-.531zm-8.075-.735l.53-.53zm3.67-3.67l.531-.531zM4.456 18.076l1.468 1.468l-1.06 1.06l-1.469-1.467zm15.09-12.154l-1.468-1.468l1.06-1.06l1.469 1.467zm0 1.876c.361-.361.578-.58.713-.757a.8.8 0 0 0 .099-.156c.008-.02.007-.024.007-.025h1.5c0 .445-.19.797-.413 1.09c-.211.277-.514.578-.845.909zm1.06-2.937c.332.331.635.632.846.908c.223.294.413.646.413 1.091h-1.5s0-.005-.007-.025a.8.8 0 0 0-.099-.156c-.135-.177-.352-.396-.713-.757zM5.924 19.545c.361.361.58.578.757.713a.8.8 0 0 0 .156.099c.02.008.024.007.025.007v1.5c-.445 0-.797-.19-1.09-.413c-.277-.211-.578-.514-.909-.845zm2.937 1.06c-.331.332-.632.635-.908.846c-.294.223-.646.413-1.091.413v-1.5s.005 0 .025-.007a.8.8 0 0 0 .156-.099c.177-.135.396-.352.757-.713zm-4.405-4.404c-.361.361-.578.58-.713.757a.8.8 0 0 0-.099.156c-.008.02-.007.024-.007.025h-1.5c0-.445.19-.797.413-1.09c.211-.277.514-.577.845-.909zm-1.06 2.937c-.332-.332-.635-.632-.846-.908c-.223-.294-.413-.646-.413-1.091h1.5s0 .005.007.025a1 1 0 0 0 .099.156c.135.177.352.396.713.757zM15.14 3.394c.332-.331.632-.634.908-.845c.294-.223.646-.413 1.091-.413v1.5s-.005 0-.025.007a.8.8 0 0 0-.156.099c-.177.135-.396.352-.757.713zm2.937 1.06c-.361-.36-.58-.577-.757-.712a.8.8 0 0 0-.156-.099c-.02-.008-.024-.007-.025-.007v-1.5c.445 0 .797.19 1.09.413c.277.211.578.514.909.845zM9.594 19.546l.734.734l-1.06 1.061l-.735-.734zm3.344.734c.353-.352.581-.582.74-.772c.151-.182.189-.27.203-.324l1.449.389c-.094.35-.282.634-.5.896c-.212.254-.498.539-.831.872zm1.06-3.67c.334.333.62.618.832.872c.218.262.406.546.5.896l-1.449.388c-.014-.053-.052-.142-.203-.323c-.159-.19-.387-.42-.74-.773zm-.117 2.574a.8.8 0 0 0 0-.418l1.449-.388c.105.391.105.803 0 1.195zM14 21.34c-.334.333-.619.62-.873.831c-.262.219-.546.407-.896.5l-.388-1.448c.053-.015.142-.052.324-.204c.19-.158.42-.387.772-.74zm-3.671-1.06c.353.352.582.58.772.74c.182.15.271.188.324.203l-.388 1.448c-.35-.093-.634-.281-.896-.5c-.255-.212-.54-.498-.873-.831zm1.902 2.391a2.3 2.3 0 0 1-1.194 0l.388-1.448a.8.8 0 0 0 .418 0zM3.72 11.062a13 13 0 0 0-.74.772c-.15.182-.188.271-.202.324l-1.45-.388c.094-.35.282-.634.5-.896c.213-.254.499-.54.832-.873zm-1.06 3.67c-.333-.333-.62-.617-.831-.872c-.219-.262-.407-.546-.5-.896l1.449-.388c.014.053.051.142.203.324c.158.19.387.42.74.772zm.118-2.574a.8.8 0 0 0 0 .418l-1.45.388a2.3 2.3 0 0 1 0-1.194zm-.118-2.157c.333-.333.618-.619.872-.83c.262-.22.546-.407.896-.5l.389 1.448c-.053.014-.142.052-.324.203c-.19.159-.42.387-.772.74zm3.67 1.061a13 13 0 0 0-.772-.74c-.181-.151-.27-.189-.323-.203l.388-1.449c.35.094.634.282.896.5c.254.212.539.498.872.831zM4.429 8.67a2.3 2.3 0 0 1 1.195 0l-.388 1.449a.8.8 0 0 0-.418 0zm16.178-.137l.734.734l-1.06 1.06l-.735-.733zM21.34 14c-.333.333-.618.619-.872.83c-.262.22-.546.407-.896.5l-.389-1.448c.053-.014.142-.052.324-.203c.19-.159.42-.387.772-.74zm-3.67-1.061c.352.353.582.581.772.74c.181.151.27.189.323.203l-.388 1.449c-.35-.094-.634-.282-.896-.5c-.254-.212-.539-.498-.872-.831zm1.901 2.392a2.3 2.3 0 0 1-1.194 0l.388-1.449a.8.8 0 0 0 .418 0zm.708-2.392c.353-.353.582-.583.74-.772c.152-.182.19-.271.204-.324l1.448.388c-.093.35-.281.634-.5.896c-.212.254-.498.54-.831.873zm1.061-3.67c.333.333.62.617.831.872c.219.262.407.546.5.896l-1.448.388c-.015-.053-.052-.142-.204-.324c-.158-.19-.387-.42-.74-.772zm-.117 2.574a.8.8 0 0 0 0-.418l1.448-.388c.105.391.105.803 0 1.194zM10 2.66c.334-.333.619-.62.873-.831c.262-.219.546-.407.896-.5l.388 1.449c-.053.014-.142.051-.324.203c-.19.158-.42.387-.772.74zm3.671 1.06a13 13 0 0 0-.772-.74c-.182-.15-.271-.188-.324-.202l.388-1.45c.35.094.634.282.896.5c.255.213.54.499.873.832zM11.77 1.33a2.3 2.3 0 0 1 1.194 0l-.388 1.449a.8.8 0 0 0-.418 0zm-.708 2.392c-.353.352-.581.582-.74.772c-.151.182-.189.27-.203.324l-1.449-.39c.094-.35.282-.634.5-.896c.212-.254.498-.539.831-.872zm-1.06 3.67c-.334-.333-.62-.618-.832-.872c-.218-.262-.406-.546-.5-.896l1.449-.388c.014.053.052.142.203.323c.159.19.387.42.74.773zm.117-2.574a.8.8 0 0 0 0 .418l-1.449.388a2.3 2.3 0 0 1 0-1.195zM3.72 13.672l3.303 3.304l-1.06 1.06l-3.304-3.303zM14.733 2.66l3.303 3.304l-1.06 1.06l-3.304-3.303zm-1.795 15.01l-1.101-1.102l1.06-1.06l1.102 1.1zm3.67-3.671l-1.1-1.102l1.06-1.06l1.101 1.101zm-4.771 2.57l-4.405-4.406l1.06-1.06l4.405 4.405zm-4.405-4.406L6.33 11.062l1.06-1.06l1.102 1.1zm8.076.734l-4.405-4.404l1.06-1.061l4.405 4.405zm-4.405-4.404L10 7.39l1.061-1.06l1.101 1.1zm8.442 1.1a1.27 1.27 0 0 1 0-1.794l1.06 1.06a.23.23 0 0 0 0-.326zM8.533 20.607c.09.09.236.09.327 0l-1.061-1.06a1.27 1.27 0 0 1 1.795 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.367 16.038l3.67-3.671m-8.075-.734l3.671-3.671" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeLinearIcon],svg[solar-dumbbell-large-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.924 18.607l.53-.53zm1.469 1.469l-.53.53zm3.67 0l-.53.53zm.735.734l.53-.53zm4.807-1.433l-.724-.194zm0-.806l-.724.194zm-2.569 3.376l-.194-.724zm-.806 0l.194-.724zm-9.177-9.983l.725.194zm1.137 2.238l-.53.53zM2.053 12.77l-.724.194zm2.57-3.375l.194.724zm.806 0l.194-.725zm14.647-.332l-.53.53zm.734.735l.53-.53zm-1.433 4.807l-.194-.724zm-.806 0l.194-.724zm3.376-2.569l-.724-.194zm0-.806l-.724.194zm-9.983-9.177l-.194-.724zm2.238 1.137l-.53.53zM12.77 2.053l-.194.725zm-3.375 2.57l-.725-.195zm0 .806l.724-.194zm-2.37 11.547a.75.75 0 0 1-1.061 1.06zm11.01-11.012a.75.75 0 1 1-1.06 1.06zm-6.403 1.998l.53-.53zM4.455 18.077l1.468 1.468l-1.06 1.06l-1.469-1.467zm15.09-12.154l-1.468-1.468l1.06-1.06l1.469 1.467zm0 1.876c.361-.361.578-.58.713-.757a.8.8 0 0 0 .099-.156c.008-.02.007-.024.007-.025h1.5c0 .445-.19.797-.413 1.09c-.211.277-.514.578-.845.909zm1.06-2.937c.332.331.635.632.846.908c.223.294.413.646.413 1.091h-1.5s0-.005-.007-.025a.8.8 0 0 0-.099-.156c-.135-.177-.352-.396-.713-.757zM5.924 19.545c.361.361.58.578.757.713a.8.8 0 0 0 .156.099c.02.008.024.007.025.007v1.5c-.445 0-.797-.19-1.09-.413c-.277-.211-.578-.514-.909-.845zm2.937 1.06c-.331.332-.632.635-.908.846c-.294.223-.646.413-1.091.413v-1.5s.005 0 .025-.007a.8.8 0 0 0 .156-.099c.177-.135.396-.352.757-.713zm-4.405-4.404c-.361.361-.578.58-.713.757a.8.8 0 0 0-.099.156c-.008.02-.007.024-.007.025h-1.5c0-.445.19-.797.413-1.09c.211-.277.514-.577.845-.909zm-1.06 2.937c-.332-.332-.635-.632-.846-.908c-.223-.294-.413-.646-.413-1.091h1.5s0 .005.007.025a1 1 0 0 0 .099.156c.135.177.352.396.713.757zM15.14 3.394c.332-.331.632-.634.908-.845c.294-.223.646-.413 1.091-.413v1.5s-.005 0-.025.007a.8.8 0 0 0-.156.099c-.177.135-.396.352-.757.713zm2.937 1.06c-.361-.36-.58-.577-.757-.712a.8.8 0 0 0-.156-.099c-.02-.008-.024-.007-.025-.007v-1.5c.445 0 .797.19 1.09.413c.277.211.578.514.909.845zM9.594 19.546l.734.734l-1.06 1.061l-.735-.734zm3.344.734c.353-.352.581-.582.74-.772c.151-.182.189-.27.203-.324l1.449.389c-.094.35-.282.634-.5.896c-.212.254-.498.539-.831.872zm1.06-3.67c.334.333.62.618.832.872c.218.262.406.546.5.896l-1.449.388c-.014-.053-.052-.142-.203-.323c-.159-.19-.387-.42-.74-.773zm-.117 2.574a.8.8 0 0 0 0-.418l1.449-.388c.105.391.105.803 0 1.195zM14 21.34c-.334.333-.619.62-.873.831c-.262.219-.546.407-.896.5l-.388-1.448c.053-.015.142-.052.324-.204c.19-.158.42-.387.772-.74zm-3.671-1.06c.353.352.582.58.772.74c.182.15.271.188.324.203l-.388 1.448c-.35-.093-.634-.281-.896-.5c-.255-.212-.54-.498-.873-.831zm1.902 2.391a2.3 2.3 0 0 1-1.194 0l.388-1.448a.8.8 0 0 0 .418 0zM3.72 11.062a13 13 0 0 0-.74.772c-.15.182-.188.271-.202.324l-1.45-.388c.094-.35.282-.634.5-.896c.213-.254.499-.54.832-.873zm-1.06 3.67c-.333-.333-.62-.617-.831-.872c-.219-.262-.407-.546-.5-.896l1.449-.388c.014.053.051.142.203.324c.158.19.387.42.74.772zm.118-2.574a.8.8 0 0 0 0 .418l-1.45.388a2.3 2.3 0 0 1 0-1.194zm-.118-2.157c.333-.333.618-.619.872-.83c.262-.22.546-.407.896-.5l.389 1.448c-.053.014-.142.052-.324.203c-.19.159-.42.387-.772.74zm3.67 1.061a13 13 0 0 0-.772-.74c-.181-.151-.27-.189-.323-.203l.388-1.449c.35.094.634.282.896.5c.254.212.539.498.872.831zM4.429 8.67a2.3 2.3 0 0 1 1.195 0l-.388 1.449a.8.8 0 0 0-.418 0zm16.178-.137l.734.734l-1.06 1.06l-.735-.733zM21.34 14c-.333.333-.618.619-.872.83c-.262.22-.546.407-.896.5l-.389-1.448c.053-.014.142-.052.324-.203c.19-.159.42-.387.772-.74zm-3.67-1.061c.352.353.582.581.772.74c.181.151.27.189.323.203l-.388 1.449c-.35-.094-.634-.282-.896-.5c-.254-.212-.539-.498-.872-.831zm1.901 2.392a2.3 2.3 0 0 1-1.194 0l.388-1.449a.8.8 0 0 0 .418 0zm.708-2.392c.353-.353.582-.583.74-.772c.152-.182.19-.271.204-.324l1.448.388c-.093.35-.281.634-.5.896c-.212.254-.498.54-.831.873zm1.061-3.67c.333.333.62.617.831.872c.219.262.407.546.5.896l-1.448.388c-.015-.053-.052-.142-.204-.324c-.158-.19-.387-.42-.74-.772zm-.117 2.574a.8.8 0 0 0 0-.418l1.448-.388c.105.391.105.803 0 1.194zM10 2.66c.334-.333.619-.62.873-.831c.262-.219.546-.407.896-.5l.388 1.449c-.053.014-.142.051-.324.203c-.19.158-.42.387-.772.74zm3.671 1.06a13 13 0 0 0-.772-.74c-.182-.15-.271-.188-.324-.202l.388-1.45c.35.094.634.282.896.5c.255.213.54.499.873.832zM11.77 1.33a2.3 2.3 0 0 1 1.194 0l-.388 1.449a.8.8 0 0 0-.418 0zm-.708 2.392c-.353.352-.581.582-.74.772c-.151.182-.189.27-.203.324l-1.449-.39c.094-.35.282-.634.5-.896c.212-.254.498-.539.831-.872zm-1.06 3.67c-.334-.333-.62-.618-.832-.872c-.218-.262-.406-.546-.5-.896l1.449-.388c.014.053.052.142.203.323c.159.19.387.42.74.773zm.117-2.574a.8.8 0 0 0 0 .418l-1.449.388a2.3 2.3 0 0 1 0-1.195zM3.72 13.672l3.303 3.304l-1.06 1.06l-3.304-3.303zM14.733 2.66l3.303 3.304l-1.06 1.06l-3.304-3.303zm-1.795 15.01l-1.101-1.102l1.06-1.06l1.102 1.1zm-1.101-2.163l3.67-3.67l1.061 1.06l-3.67 3.671zM16.609 14l-1.102-1.102l1.061-1.06l1.101 1.101zm-4.772 2.57l-4.405-4.406l1.06-1.06l4.405 4.405zm-4.405-4.406L6.33 11.062l1.06-1.06l1.102 1.1zm4.731-3.67l-3.67 3.67l-1.061-1.06l3.67-3.671zm3.345 4.404l-4.405-4.404l1.06-1.061l4.405 4.405zm-4.405-4.404L10 7.39l1.061-1.06l1.101 1.1zm8.442 1.1a1.27 1.27 0 0 1 0-1.794l1.06 1.06a.23.23 0 0 0 0-.326zM8.533 20.607c.09.09.236.09.327 0l-1.061-1.06a1.27 1.27 0 0 1 1.795 0z"></svg:path>`,
})
export class SolarDumbbellLargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticBoldIcon],svg[solar-dumbbell-large-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.38 20.568L3.433 15.62c-.905-.904-1.357-1.356-1.421-1.908a1.6 1.6 0 0 1 0-.371c.064-.552.516-1.005 1.42-1.909c.905-.904 1.357-1.356 1.909-1.42q.186-.023.37 0c.553.064 1.005.516 1.91 1.42l.733.734l3.812-3.813l-.733-.733c-.905-.904-1.357-1.356-1.421-1.908a1.6 1.6 0 0 1 0-.371c.064-.552.516-1.004 1.42-1.909c.905-.904 1.357-1.356 1.909-1.42a1.6 1.6 0 0 1 .37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .37c-.064.553-.516 1.005-1.42 1.91c-.905.903-1.357 1.355-1.909 1.42a1.6 1.6 0 0 1-.37 0c-.553-.065-1.005-.517-1.91-1.42l-1.111-1.113l-3.812 3.813l1.111 1.112c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .37c-.064.553-.516 1.005-1.42 1.91c-.905.903-1.357 1.355-1.909 1.42a1.6 1.6 0 0 1-.37 0c-.553-.065-1.005-.517-1.91-1.42"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.489 1.968a.75.75 0 0 1 1.06 0l3.104 3.104a.75.75 0 0 1-1.06 1.06l-3.105-3.104a.75.75 0 0 1 0-1.06M1.966 17.488a.75.75 0 0 1 1.06 0l3.105 3.104a.75.75 0 0 1-1.06 1.06l-3.105-3.104a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbellLargeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticBoldDuotoneIcon],svg[solar-dumbbell-large-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.432 15.62l4.949 4.948c.904.905 1.356 1.357 1.908 1.421q.185.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-1.113-1.111l-3.103-3.104l-.734-.733c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91m8.733-7.267l3.104 3.104l1.112 1.111c.904.905 1.356 1.357 1.908 1.421q.186.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-4.95-4.948c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m11.457 15.269l3.812-3.812l-3.104-3.104l-3.812 3.812z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.489 1.968a.75.75 0 0 1 1.06 0l3.105 3.104a.75.75 0 0 1-1.061 1.06l-3.104-3.104a.75.75 0 0 1 0-1.06M1.968 17.488a.75.75 0 0 1 1.06 0l3.104 3.104a.75.75 0 0 1-1.06 1.06l-3.104-3.104a.75.75 0 0 1 0-1.06" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarDumbbellLargeMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticBrokenIcon],svg[solar-dumbbell-large-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m8.319 12.198l3.88-3.88m3.104 3.104l-3.88 3.88"></svg:path><svg:path stroke-linecap="round" d="m7.143 19.331l1.238 1.237c.904.905 1.356 1.357 1.908 1.421q.185.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-4.95-4.948c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91l.62.618M16.857 4.669l-1.238-1.237c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91l4.95 4.948c.904.905 1.356 1.357 1.908 1.421q.186.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-.62-.618"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.019 2.498l3.104 3.104M2.498 18.019l3.104 3.104"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticLineDuotoneIcon],svg[solar-dumbbell-large-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m8.319 12.198l3.88-3.88m3.104 3.104l-3.88 3.88" opacity=".5"></svg:path><svg:path d="M3.432 15.62c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.023.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42zm8-8c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.022.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.185 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.019 2.498l3.104 3.104M2.498 18.019l3.104 3.104" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticLinearIcon],svg[solar-dumbbell-large-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m8.319 12.198l3.88-3.88m3.104 3.104l-3.88 3.88m-7.991.318c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.023.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42zm8-8c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908c.905-.905 1.357-1.357 1.909-1.421q.186-.022.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.185 0 .371c-.064.552-.516 1.004-1.42 1.908c-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.019 2.498l3.104 3.104M2.498 18.019l3.104 3.104"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticOutlineIcon],svg[solar-dumbbell-large-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.624 2.756a1 1 0 0 0-.197 0c-.081.01-.202.047-.443.238c-.253.2-.557.503-1.022.968s-.767.769-.968 1.022c-.191.24-.229.362-.238.443a1 1 0 0 0 0 .197c.01.081.047.202.238.443c.2.253.503.557.968 1.022l4.949 4.95c.465.464.769.766 1.022.967c.241.191.362.229.443.238a1 1 0 0 0 .197 0c.081-.01.202-.047.443-.238c.253-.2.557-.503 1.022-.968s.767-.769.968-1.022c.191-.24.229-.362.238-.443a1 1 0 0 0 0-.197c-.01-.081-.047-.202-.238-.443c-.2-.253-.503-.557-.968-1.022l-4.949-4.95c-.465-.464-.769-.766-1.022-.967c-.241-.191-.362-.229-.443-.238m-.371-1.49q.273-.031.545 0c.47.055.852.276 1.201.553c.33.26.694.626 1.12 1.052l5.01 5.01c.426.426.791.79 1.052 1.12c.277.349.498.73.553 1.201q.032.272 0 .545c-.055.471-.276.852-.553 1.201c-.26.33-.626.694-1.052 1.121l-.06.06c-.427.426-.791.791-1.12 1.052c-.35.277-.731.498-1.202.553a2.3 2.3 0 0 1-.545 0c-.47-.055-.852-.276-1.201-.553c-.33-.26-.694-.626-1.12-1.052l-.612-.612l-2.752 2.752l.612.611c.426.427.791.792 1.052 1.12c.277.35.498.731.553 1.202q.032.273 0 .545c-.055.471-.276.852-.553 1.201c-.26.33-.626.694-1.052 1.121l-.06.06c-.427.426-.792.791-1.12 1.052c-.35.277-.731.498-1.202.553a2.3 2.3 0 0 1-.545 0c-.47-.055-.852-.276-1.201-.553c-.33-.26-.694-.626-1.12-1.052l-5.01-5.01c-.426-.426-.791-.79-1.052-1.12c-.277-.349-.498-.73-.553-1.201a2.4 2.4 0 0 1 0-.545c.055-.471.276-.852.553-1.201c.26-.33.626-.694 1.052-1.121l.06-.06c.427-.426.792-.791 1.12-1.052c.35-.277.731-.498 1.202-.553q.272-.032.545 0c.47.055.852.276 1.201.553c.33.26.694.626 1.12 1.052l.234.233l2.751-2.751l-.233-.233c-.426-.427-.791-.792-1.052-1.12c-.277-.35-.498-.731-.553-1.202a2.4 2.4 0 0 1 0-.545c.055-.471.276-.852.553-1.201c.26-.33.626-.694 1.052-1.12l.06-.06c.427-.427.792-.792 1.12-1.053c.35-.277.731-.498 1.202-.553m-1.088 8.147l-2.752 2.752l2.043 2.043l2.752-2.751zm5.323-7.445a.75.75 0 0 1 1.061 0l3.104 3.104a.75.75 0 0 1-1.06 1.06L17.488 3.03a.75.75 0 0 1 0-1.061M5.624 10.756a1 1 0 0 0-.197 0c-.081.01-.202.047-.443.238c-.253.2-.557.503-1.022.968s-.767.769-.968 1.022c-.191.24-.229.362-.238.443a1 1 0 0 0 0 .197c.01.081.047.202.238.443c.2.253.503.557.968 1.022l4.949 4.95c.465.464.769.766 1.022.967c.241.191.362.229.443.238a1 1 0 0 0 .197 0c.081-.01.202-.047.443-.238c.253-.2.557-.503 1.022-.968s.767-.769.968-1.022c.191-.24.229-.362.238-.443a1 1 0 0 0 0-.197c-.01-.081-.047-.202-.238-.443c-.2-.253-.503-.557-.968-1.022l-4.949-4.95c-.465-.464-.769-.766-1.022-.967c-.241-.191-.362-.229-.443-.238m-3.657 6.732a.75.75 0 0 1 1.06 0l3.105 3.104a.75.75 0 1 1-1.06 1.06l-3.105-3.104a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbellLargeMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeOutlineIcon],svg[solar-dumbbell-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.576 2.778a.8.8 0 0 0-.418 0c-.053.014-.142.051-.324.203c-.19.158-.42.387-.772.74c-.353.352-.581.582-.74.772c-.151.182-.189.27-.203.324a.8.8 0 0 0 0 .418c.014.053.052.142.203.323c.159.19.387.42.74.773l6.607 6.607c.353.353.583.581.773.74c.181.151.27.189.323.203a.8.8 0 0 0 .418 0c.053-.014.142-.052.324-.203c.19-.159.42-.387.772-.74s.582-.583.74-.772c.152-.182.19-.271.204-.324a.8.8 0 0 0 0-.418c-.015-.053-.052-.142-.204-.324c-.158-.19-.387-.42-.74-.772l-.734-.734a1.27 1.27 0 0 1 0-1.795c.361-.361.578-.58.713-.757a.8.8 0 0 0 .099-.156c.007-.018.007-.023.007-.025q.002 0-.007-.025a.8.8 0 0 0-.099-.156c-.135-.177-.352-.396-.713-.757l-1.468-1.468c-.361-.361-.58-.578-.757-.713a.8.8 0 0 0-.156-.099q-.025-.009-.025-.007s-.005 0-.025.007a.8.8 0 0 0-.156.099a7 7 0 0 0-.593.55l1.671 1.672a.75.75 0 1 1-1.06 1.06l-3.304-3.303a13 13 0 0 0-.772-.74c-.182-.152-.271-.19-.324-.203m2.728.453l-.594-.594a14 14 0 0 0-.85-.808c-.262-.219-.546-.407-.896-.5a2.3 2.3 0 0 0-1.194 0c-.35.093-.634.281-.896.5c-.248.207-.526.485-.85.808l-.046.046c-.323.323-.6.601-.808.85c-.218.261-.406.545-.5.895a2.3 2.3 0 0 0 0 1.195c.094.35.282.634.5.896c.207.248.485.526.808.85l.594.593l-2.61 2.61l-.594-.594a14 14 0 0 0-.849-.808c-.262-.218-.546-.406-.896-.5a2.3 2.3 0 0 0-1.195 0c-.35.094-.634.282-.896.5c-.248.207-.526.485-.85.808l-.045.046c-.323.324-.601.602-.808.85c-.219.262-.407.546-.5.896a2.3 2.3 0 0 0 0 1.194c.093.35.281.634.5.896c.207.249.484.526.808.85l.023.023l.57.57a8 8 0 0 0-.68.745c-.224.294-.414.646-.414 1.091s.19.797.413 1.09c.204.268.495.558.813.877l1.532 1.532c.319.318.609.609.876.813c.294.223.646.413 1.091.413s.797-.19 1.09-.413a8 8 0 0 0 .745-.682l.594.594c.324.323.601.601.85.808c.262.219.546.407.896.5c.391.105.803.105 1.194 0c.35-.093.634-.281.896-.5c.248-.207.526-.485.85-.808l.046-.046c.323-.323.6-.601.808-.85c.218-.261.406-.545.5-.895a2.3 2.3 0 0 0 0-1.195c-.094-.35-.282-.634-.5-.896a14 14 0 0 0-.809-.85l-.593-.593l2.61-2.61l.594.594c.323.323.6.6.849.808c.262.218.546.406.896.5c.391.105.803.105 1.195 0c.35-.094.634-.282.896-.5c.248-.207.526-.485.85-.808l.045-.046c.323-.324.601-.602.808-.85c.219-.262.407-.546.5-.896a2.3 2.3 0 0 0 0-1.194c-.093-.35-.281-.634-.5-.896a14 14 0 0 0-.808-.85l-.594-.594a8 8 0 0 0 .682-.744c.223-.294.413-.646.413-1.091s-.19-.797-.413-1.09c-.204-.268-.495-.558-.813-.877l-1.532-1.532c-.319-.318-.609-.609-.876-.813c-.294-.223-.646-.413-1.091-.413s-.797.19-1.09.413c-.23.176-.478.415-.745.682m-.327 9.136l-3.344-3.344l-2.61 2.61l3.344 3.344zM4.292 16.364a7 7 0 0 0-.55.594a.8.8 0 0 0-.099.156c-.007.018-.007.023-.007.025q-.002 0 .007.025a1 1 0 0 0 .099.156c.135.177.352.396.713.757l1.468 1.468c.361.361.58.578.757.713a.8.8 0 0 0 .156.099c.02.008.024.007.025.007q0 .002.025-.007a.8.8 0 0 0 .156-.099c.177-.135.396-.352.757-.713a1.27 1.27 0 0 1 1.795 0l.734.734c.353.353.582.582.772.74c.182.152.271.19.324.204a.8.8 0 0 0 .418 0c.053-.015.142-.052.324-.204c.19-.158.42-.387.772-.74c.353-.352.581-.582.74-.772c.151-.182.189-.27.203-.324a.8.8 0 0 0 0-.418c-.014-.053-.052-.142-.203-.323c-.159-.19-.387-.42-.74-.773l-6.607-6.607a13 13 0 0 0-.773-.74c-.181-.151-.27-.189-.323-.203a.8.8 0 0 0-.418 0c-.053.014-.142.052-.324.203c-.19.159-.42.387-.772.74a13 13 0 0 0-.74.772c-.152.182-.19.271-.203.324a.8.8 0 0 0 0 .418c.014.053.051.142.203.324c.158.19.387.42.74.772l3.303 3.304a.75.75 0 0 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbellLargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLineDuotoneIcon],svg[solar-dumbbell-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.235 16.848l-.287.693zM16 13.5h.75a.75.75 0 0 0-.75-.75zm.152 2.265l-.693.287zm5.696 0l.693.287zm-1.083 1.083l-.287-.693zm0-9.696l-.287.693zm1.083 1.083l.693-.287zm-4.613-1.083l-.287-.693zM16 10.5v.75a.75.75 0 0 0 .75-.75zm.152-2.265l-.693-.287zM3.235 16.848l-.287.693zm-1.083-1.083l-.693.287zM8 13.5v-.75a.75.75 0 0 0-.75.75zm-.152 2.265l.693.287zm-1.083 1.083l.287.693zm0-9.696l.287-.693zM8 10.5h-.75c0 .414.336.75.75.75zm-.152-2.265l.693-.287zM3.235 7.152l-.287-.693zM2.152 8.235l-.693-.287zM21.25 10v4h1.5v-4zM19 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zm-3.75-2.75c0 .461 0 .954.02 1.38c.01.213.026.421.051.609c.024.176.063.382.138.563l1.386-.574l-.012-.045a2 2 0 0 1-.026-.147a6 6 0 0 1-.039-.477a30 30 0 0 1-.018-1.309zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM21.25 14c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zM19 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM19 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zM22.75 10c0-.456 0-.835-.02-1.145a2.8 2.8 0 0 0-.19-.907l-1.385.574c.032.077.061.194.078.435c.017.247.017.567.017 1.043zm-2.272-2.155c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM19 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017zm-2.25 4.25c0-.47 0-.926.018-1.309q.014-.286.04-.477q.012-.093.025-.147l.012-.045l-1.386-.574a2.3 2.3 0 0 0-.138.563a7 7 0 0 0-.051.61c-.02.425-.02.918-.02 1.379zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM2.75 14v-4h-1.5v4zM5 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zM1.25 14c0 .456 0 .835.02 1.145c.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 14zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM7.25 13.5c0 .47 0 .926-.018 1.309q-.014.286-.04.477a2 2 0 0 1-.025.147l-.012.045l1.386.574c.075-.181.114-.387.138-.563c.025-.188.041-.396.051-.61c.02-.425.02-.918.02-1.379zM5 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17 17 0 0 1 5 16.25zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM5 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zm3.75 2.75c0-.461 0-.954-.02-1.38a7 7 0 0 0-.051-.609a2.3 2.3 0 0 0-.138-.563l-1.386.574l.012.045q.012.053.026.147a6 6 0 0 1 .039.477c.018.383.018.838.018 1.309zM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM5 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17 17 0 0 1 5 7.75zM2.75 10c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907c-.021.31-.021.69-.021 1.145zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM8 11.25h8v-1.5H8zm8 1.5H8v1.5h8z"></svg:path>`,
})
export class SolarDumbbellLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLinearIcon],svg[solar-dumbbell-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.235 16.848l-.287.693zM16 13.5h.75a.75.75 0 0 0-.75-.75zm.152 2.265l-.693.287zm5.696 0l.693.287zm-1.083 1.083l-.287-.693zm0-9.696l-.287.693zm1.083 1.083l.693-.287zm-4.613-1.083l-.287-.693zM16 10.5v.75a.75.75 0 0 0 .75-.75zm.152-2.265l-.693-.287zM3.235 16.848l-.287.693zm-1.083-1.083l-.693.287zM8 13.5v-.75a.75.75 0 0 0-.75.75zm-.152 2.265l.693.287zm-1.083 1.083l.287.693zm0-9.696l.287-.693zM8 10.5h-.75c0 .414.336.75.75.75zm-.152-2.265l.693-.287zM3.235 7.152l-.287-.693zM2.152 8.235l-.693-.287zM21.25 10v4h1.5v-4zM19 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zm-3.75-2.75c0 .461 0 .954.02 1.38c.01.213.026.421.051.609c.024.176.063.382.138.563l1.386-.574l-.012-.045a2 2 0 0 1-.026-.147a6 6 0 0 1-.039-.477a30 30 0 0 1-.018-1.309zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM21.25 14c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zM19 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM19 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zM22.75 10c0-.456 0-.835-.02-1.145a2.8 2.8 0 0 0-.19-.907l-1.385.574c.032.077.061.194.078.435c.017.247.017.567.017 1.043zm-2.272-2.155c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM19 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017zm-2.25 4.25c0-.47 0-.926.018-1.309q.014-.286.04-.477q.012-.093.025-.147l.012-.045l-1.386-.574a2.3 2.3 0 0 0-.138.563a7 7 0 0 0-.051.61c-.02.425-.02.918-.02 1.379zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM2.75 14v-4h-1.5v4zM5 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zM1.25 14c0 .456 0 .835.02 1.145c.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 14zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM7.25 13.5c0 .47 0 .926-.018 1.309q-.014.286-.04.477a2 2 0 0 1-.025.147l-.012.045l1.386.574c.075-.181.114-.387.138-.563c.025-.188.041-.396.051-.61c.02-.425.02-.918.02-1.379zM5 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17 17 0 0 1 5 16.25zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM5 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zm3.75 2.75c0-.461 0-.954-.02-1.38a7 7 0 0 0-.051-.609a2.3 2.3 0 0 0-.138-.563l-1.386.574l.012.045q.012.053.026.147a6 6 0 0 1 .039.477c.018.383.018.838.018 1.309zM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM5 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17 17 0 0 1 5 7.75zM2.75 10c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907c-.021.31-.021.69-.021 1.145zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM8 11.25h8v-1.5H8zm8 1.5H8v1.5h8z"></svg:path>`,
})
export class SolarDumbbellLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellOutlineIcon],svg[solar-dumbbell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.975 6.25h.05c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.075.181.114.387.138.563c.025.188.041.396.051.61c.01.198.014.411.017.629h6.506c.003-.218.008-.431.017-.63c.01-.213.026-.421.051-.609c.024-.176.063-.382.138-.563a2.75 2.75 0 0 1 1.489-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021h.05c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v4.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488a2.3 2.3 0 0 1-.138-.563a7 7 0 0 1-.051-.61a18 18 0 0 1-.017-.629H8.747c-.003.218-.008.431-.017.63c-.01.213-.026.421-.051.609a2.3 2.3 0 0 1-.138.563a2.75 2.75 0 0 1-1.489 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-4.05c0-.445 0-.816.02-1.12a2.8 2.8 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021M3.957 7.767c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17 17 0 0 0 2.75 10v4c0 .476 0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c0 0 .005-.012.012-.045q.012-.054.026-.147q.026-.19.039-.477c.018-.383.018-.838.018-1.309a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75c0 .47 0 .926.018 1.309q.014.286.04.477q.012.093.025.147q.012.048.013.046c.126.307.37.549.676.676c.077.032.194.061.435.078c.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043v-4c0-.476 0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 19 7.75c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677l-.012.045a2 2 0 0 0-.026.147q-.025.19-.039.477c-.018.383-.018.838-.018 1.309a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75c0-.47 0-.926-.018-1.309a6 6 0 0 0-.04-.477a2 2 0 0 0-.025-.147q-.012-.047-.013-.046a1.25 1.25 0 0 0-.676-.676c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 5 7.75c-.476 0-.796 0-1.043.017" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbellOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallBoldIcon],svg[solar-dumbbell-small-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a2 2 0 0 1 1.5-1.937v3.874A2 2 0 0 1 2 12m20 0a2 2 0 0 1-1.5 1.937v-3.874A2 2 0 0 1 22 12m-3-3v6c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C17.697 17 17.464 17 17 17s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C15 15.697 15 15.464 15 15v-2.25H9V15c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C7.696 17 7.464 17 7 17s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C5 15.697 5 15.464 5 15V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C6.304 7 6.536 7 7 7s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C9 8.304 9 8.536 9 9v2.25h6V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C16.303 7 16.536 7 17 7s.698 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C19 8.304 19 8.536 19 9"></svg:path>`,
})
export class SolarDumbbellSmallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallBoldDuotoneIcon],svg[solar-dumbbell-small-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C17.697 7 17.464 7 17 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C15 8.304 15 8.536 15 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C19 15.697 19 15.464 19 15M5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C6.304 17 6.536 17 7 17s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C9 15.697 9 15.464 9 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.696 7 7.464 7 7 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C5 8.304 5 8.536 5 9"></svg:path><svg:path fill="currentColor" d="M15 12.75H9v-1.5h6zM3.5 12A2 2 0 0 1 5 10.063v3.874A2 2 0 0 1 3.5 12m17 0a2 2 0 0 1-1.5 1.937v-3.874a2 2 0 0 1 1.5 1.936" opacity=".5"></svg:path>`,
})
export class SolarDumbbellSmallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallBrokenIcon],svg[solar-dumbbell-small-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889Zm-11 0v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z"></svg:path><svg:path fill="currentColor" d="M2 12h-.75zm20 0h-.75zm-11 .75a.75.75 0 0 0 0-1.5zm3-1.5a.75.75 0 0 0 0 1.5zm-10 2c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 14.75zm16 1.5A2.75 2.75 0 0 0 22.75 12h-1.5c0 .69-.56 1.25-1.25 1.25zm0-4c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 9.25zM4 9.25A2.75 2.75 0 0 0 1.25 12h1.5c0-.69.56-1.25 1.25-1.25zm0 1.5h1v-1.5H4zm1 2.5H4v1.5h1zm15 0h-1v1.5h1zm-1-2.5h1v-1.5h-1zm-10 2h2v-1.5H9zm5 0h1v-1.5h-1z"></svg:path></svg:g>`,
})
export class SolarDumbbellSmallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallLineDuotoneIcon],svg[solar-dumbbell-small-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889Zm-11 0v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z"></svg:path><svg:path d="M5 10H4a2 2 0 1 0 0 4h1m4-2h6m4 2h1a2 2 0 1 0 0-4h-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDumbbellSmallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallLinearIcon],svg[solar-dumbbell-small-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889Zm-11 0v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z"></svg:path><svg:path d="M5 10H4a2 2 0 1 0 0 4h1m4-2h6m4 2h1a2 2 0 1 0 0-4h-1"></svg:path></svg:g>`,
})
export class SolarDumbbellSmallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallOutlineIcon],svg[solar-dumbbell-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.416 6.25h.168c.38 0 .71 0 .998.077a2.25 2.25 0 0 1 1.591 1.59l-.702.189l.702-.188c.078.289.078.617.077.998v.345a2.75 2.75 0 0 1 0 5.478v.345c0 .38 0 .71-.077.999a2.25 2.25 0 0 1-1.59 1.59c-.29.078-.618.078-1 .077h-.167c-.38 0-.71 0-.998-.076a2.25 2.25 0 0 1-1.591-1.591c-.078-.29-.078-.618-.077-.999V12.75h-5.5v2.334c0 .38 0 .71-.077.999a2.25 2.25 0 0 1-1.59 1.59c-.29.078-.618.078-1 .077h-.167c-.38 0-.71 0-.998-.076a2.25 2.25 0 0 1-1.591-1.591c-.078-.29-.077-.618-.077-.999v-.345a2.75 2.75 0 0 1 0-5.478v-.345c0-.38 0-.71.077-.998a2.25 2.25 0 0 1 1.59-1.591c.29-.078.618-.077 1-.077h.167c.38 0 .71 0 .998.077a2.25 2.25 0 0 1 1.591 1.59c.078.29.077.618.077 1v2.333h5.5V8.916c0-.38 0-.71.077-.998a2.25 2.25 0 0 1 1.59-1.591c.29-.078.618-.077 1-.077M3.75 10.775a1.25 1.25 0 0 0 0 2.45zm16.5 2.45a1.25 1.25 0 0 0 0-2.45zM17.5 7.75c-.513 0-.623.007-.694.026a.75.75 0 0 0-.53.53l-.725-.194l.725.194c-.02.071-.026.18-.026.694v6c0 .513.006.623.026.694a.75.75 0 0 0 .53.53c.071.02.18.026.694.026c.513 0 .623-.006.694-.025a.75.75 0 0 0 .53-.53c.02-.072.026-.182.026-.695V9c0-.513-.006-.623-.026-.694a.75.75 0 0 0-.53-.53c-.071-.02-.18-.026-.694-.026m-11 0c-.513 0-.623.007-.694.026a.75.75 0 0 0-.53.53c-.02.071-.026.18-.026.694v6c0 .513.006.623.026.694a.75.75 0 0 0 .53.53l-.194.725l.194-.724c.071.019.18.025.694.025c.513 0 .623-.006.694-.025l.194.724l-.194-.724a.75.75 0 0 0 .53-.53c.02-.072.026-.182.026-.695V9c0-.513-.006-.623-.026-.694a.75.75 0 0 0-.53-.53c-.071-.02-.18-.026-.694-.026" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbellSmallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2BoldIcon],svg[solar-dumbbells-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.985 7.443l-2.94-.354c-.686-.082-1.028-.124-1.313-.053c-.38.095-.703.326-.899.642c-.147.236-.192.554-.28 1.188c-.09.635-.134.952-.057 1.216c.102.351.351.65.692.832c.256.136.966.222 1.651.304l-.883 6.298c-.685-.082-1.396-.168-1.68-.096c-.38.094-.703.325-.9.64c-.146.238-.19.555-.28 1.19c-.089.634-.133.951-.057 1.215c.103.351.352.65.693.832c.255.137.598.178 1.283.26l2.94.354c.686.082 1.028.124 1.313.052a1.47 1.47 0 0 0 .899-.64c.147-.238.192-.555.28-1.19c.09-.634.134-.95.057-1.215a1.4 1.4 0 0 0-.692-.832c-.256-.136-.966-.222-1.651-.304l.883-6.298c.685.082 1.396.168 1.68.096c.38-.094.703-.325.9-.64c.146-.238.19-.555.28-1.19c.089-.634.133-.951.057-1.215a1.4 1.4 0 0 0-.693-.832c-.255-.137-.598-.178-1.283-.26m11.301 8.64l-2.712.7c-.632.163-.947.244-1.224.209a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179c.049-.355.242-.677.537-.895c.222-.164.877-.333 1.508-.496l-1.68-6.036c-.632.163-1.286.332-1.563.297a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179a1.34 1.34 0 0 1 .538-.895c.221-.164.537-.245 1.168-.408l2.712-.7c.632-.163.947-.244 1.224-.209c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.537.895c-.222.164-.877.333-1.508.496l1.68 6.036c.631-.163 1.286-.332 1.563-.297c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.538.895c-.221.164-.537.245-1.169.408"></svg:path>`,
})
export class SolarDumbbells2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2BoldDuotoneIcon],svg[solar-dumbbells-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.985 7.443l-2.94-.354c-.686-.082-1.028-.124-1.313-.053c-.38.095-.703.326-.899.642c-.147.236-.192.554-.28 1.188c-.09.635-.134.952-.057 1.216c.102.351.351.65.692.832c.256.136.966.222 1.651.304l-.883 6.298c-.685-.082-1.396-.168-1.68-.096c-.38.094-.703.325-.9.64c-.146.238-.19.555-.28 1.19c-.089.634-.133.951-.057 1.215c.103.351.352.65.693.832c.255.137.598.178 1.283.26l2.94.354c.686.082 1.028.124 1.313.052a1.47 1.47 0 0 0 .899-.64c.147-.238.192-.555.28-1.19c.09-.634.134-.95.057-1.215a1.4 1.4 0 0 0-.692-.832c-.256-.136-.966-.222-1.651-.304l.883-6.298c.685.082 1.396.168 1.68.096c.38-.094.703-.325.9-.64c.146-.238.19-.555.28-1.19c.089-.634.133-.951.057-1.215a1.4 1.4 0 0 0-.693-.832c-.255-.137-.598-.178-1.283-.26" opacity=".5"></svg:path><svg:path fill="currentColor" d="m20.286 16.083l-2.712.7c-.632.163-.947.244-1.224.209a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179c.049-.355.242-.677.537-.895c.222-.164.877-.333 1.508-.496l-1.68-6.036c-.632.163-1.286.332-1.563.297a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179a1.34 1.34 0 0 1 .538-.895c.221-.164.537-.245 1.168-.408l2.712-.7c.632-.163.947-.244 1.224-.209c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.537.895c-.222.164-.877.333-1.508.496l1.68 6.036c.631-.163 1.286-.332 1.563-.297c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.538.895c-.221.164-.537.245-1.169.408"></svg:path>`,
})
export class SolarDumbbells2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2BrokenIcon],svg[solar-dumbbells-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.09 7.311l.09-.744zm2.84.345l-.09.744zm1.583 3.404l.639.393zm-2.49.53l.09-.745a.75.75 0 0 0-.834.641zm1.622.094l-.184-.727zm.525-3.775l.355-.661zm.669.81l-.72.209zm-6.884-.835l-.639-.393zm.868-.624l-.183-.727zM3.63 10.225l-.72.208zm2.263 1.107l.743.103a.75.75 0 0 0-.653-.848zm-1.594-.296l.354-.661zM6.97 21.742l-.09.744zm-2.84-.345l.09-.744zm5.246-1.386l.743.104zm-.27 1.158l-.64-.394zm-.869.624l.183.727zM7.169 17.72l-.743-.103a.75.75 0 0 0 .653.848zm1.594.296l.355-.66zm.67.811l-.721.208zm-7.156.322l.743.104zm.271-1.157l-.639-.393zm2.49-.53l-.09.745a.75.75 0 0 0 .834-.642zm-1.622-.094l-.183-.727zm-1.194 2.965l-.72.208zm.669.81l-.355.661zm3.11-13.088l2.84.344l.18-1.489l-2.84-.344zm4.04 1.743c-.044.32-.073.52-.105.67a.7.7 0 0 1-.062.197l1.278.787c.134-.218.203-.446.25-.67c.047-.216.083-.479.125-.777zm-2.11 2.535c.327.04.682.083.99.107c.27.02.632.04.907-.03l-.367-1.454c.02-.005-.002.002-.097.003q-.127 0-.328-.015c-.269-.02-.588-.059-.924-.1zm1.943-1.668a.67.67 0 0 1-.413.29l.367 1.455a2.17 2.17 0 0 0 1.324-.958zM8.84 8.4c.34.042.561.069.728.1c.162.03.221.055.247.07l.71-1.322c-.22-.119-.45-.18-.682-.223c-.225-.042-.5-.075-.822-.114zm2.687 1.606c.041-.298.078-.561.093-.781c.015-.228.01-.467-.06-.714l-1.442.417c.003.01.014.053.005.199c-.01.152-.037.353-.082.672zM9.815 8.569c.161.087.263.22.303.359l1.441-.417a2.1 2.1 0 0 0-1.034-1.263zm-5.388.576c.044-.32.072-.52.105-.67a.7.7 0 0 1 .061-.197L3.316 7.49a2.1 2.1 0 0 0-.251.67c-.046.216-.083.48-.124.777zM6.18 6.567c-.321-.04-.597-.073-.826-.086a2.3 2.3 0 0 0-.715.052l.366 1.454a1 1 0 0 1 .263-.009c.17.01.39.036.731.078zm-1.588 1.71a.67.67 0 0 1 .413-.29L4.64 6.533a2.17 2.17 0 0 0-1.324.958zm-1.652.661c-.042.298-.079.561-.093.781c-.015.228-.01.467.06.714l1.442-.416a.6.6 0 0 1-.005-.2c.01-.152.037-.352.082-.672zm3.041 1.649a22 22 0 0 1-.92-.124a4 4 0 0 1-.32-.064c-.092-.023-.11-.035-.09-.024l-.71 1.321c.251.135.609.203.874.247c.305.05.66.094.986.133zm-3.073-.154c.157.547.537.996 1.034 1.263l.71-1.321a.6.6 0 0 1-.303-.358zM7.06 20.997l-2.84-.344l-.18 1.489l2.84.344zm1.573-1.089c-.044.32-.072.52-.105.67a.7.7 0 0 1-.061.197l1.277.787c.134-.218.203-.446.251-.67c.046-.216.083-.48.124-.777zM6.88 22.486c.322.04.597.073.827.086c.235.014.472.01.714-.052l-.366-1.454a1 1 0 0 1-.263.009c-.17-.01-.39-.037-.731-.078zm1.588-1.71a.67.67 0 0 1-.413.29l.366 1.454a2.17 2.17 0 0 0 1.324-.958zm-1.39-2.31c.336.04.655.08.92.124q.2.033.321.064c.092.023.11.035.09.024l.71-1.321c-.251-.135-.608-.203-.874-.247c-.305-.05-.66-.094-.986-.133zm3.042 1.649c.042-.298.079-.561.093-.782a2 2 0 0 0-.06-.713l-1.441.416c.002.01.014.054.004.2c-.01.152-.037.352-.082.672zm-1.71-1.437a.6.6 0 0 1 .303.358l1.44-.416a2.1 2.1 0 0 0-1.034-1.263zm-5.39.576c.045-.32.074-.52.106-.67a.7.7 0 0 1 .062-.197L1.909 17.6a2.1 2.1 0 0 0-.25.67c-.047.216-.083.479-.125.777zm2.11-2.536c-.326-.04-.68-.082-.989-.106c-.27-.02-.632-.04-.907.03l.367 1.454c-.02.005.003-.002.097-.003q.127 0 .328.015c.269.02.588.059.924.1zm-1.942 1.669a.67.67 0 0 1 .413-.29l-.367-1.455a2.17 2.17 0 0 0-1.324.958zm-1.653.66c-.041.298-.078.561-.093.781c-.015.228-.01.467.06.714l1.442-.417a.6.6 0 0 1-.005-.199c.01-.153.037-.353.082-.672zm2.687 1.606c-.34-.042-.56-.069-.728-.1a1 1 0 0 1-.247-.07l-.71 1.322c.22.119.45.18.682.223c.225.042.5.075.822.114zm-2.72-.111a2.1 2.1 0 0 0 1.035 1.263l.71-1.322a.6.6 0 0 1-.303-.358zm4.28-2.976l.854-6.131l-1.486-.207l-.853 6.132zm1.498-6.08l-.853 6.132l1.486.207l.853-6.132zm13.732 1.184l.58-.477zm-2.544-.218l-.72.207a.75.75 0 0 0 .902.52zm1.595-.294l.092-.744zm-.32 3.354a.75.75 0 0 0 .365 1.455zm1.376.323l.436.61zm.547-.886l.743.105zm-6.705 1.678l-.58.476zm.858 1.256a.75.75 0 1 0 .183-1.49zm-1.512-3.536l-.743-.105zm2.086-1.376l.182.727a.75.75 0 0 0 .54-.934zm-1.538.49l.437.61zm1.133-10.942l.182.727zm-2.766.692l-.182-.728zm4.964-.388l-.58.476zm-.949-.511l.092-.745zm-.483 4.167l-.182-.727a.75.75 0 0 0-.539.934zm1.539-.49l-.437-.61zm.548-.886l-.743-.105zM12.135 6.78l.58-.476zm2.544.218l.721-.207a.75.75 0 0 0-.903-.52zm-1.595.294l.092-.744zM11.481 4.5l.743.104zm.548-.886l.437.61zm10.137 9.961c-.084-.29-.157-.546-.233-.754a2.1 2.1 0 0 0-.341-.629l-1.16.953a.7.7 0 0 1 .093.192c.053.146.11.34.199.652zm-3.516-.397c.327-.082.638-.16.901-.213q.197-.04.323-.055c.093-.01.117-.006.098-.009l.183-1.488c-.282-.035-.638.028-.903.082c-.303.062-.648.149-.966.228zm2.942-.986a2.2 2.2 0 0 0-1.437-.78l-.183 1.49a.7.7 0 0 1 .46.243zm-1.484 4.774c.313-.079.582-.145.8-.215a2.2 2.2 0 0 0 .647-.307l-.873-1.22a1 1 0 0 1-.231.098a12 12 0 0 1-.707.188zm.616-2.977c.09.311.145.507.176.657c.03.144.025.188.024.198l1.485.209a2 2 0 0 0-.04-.715c-.046-.216-.12-.473-.203-.763zm.831 2.455c.46-.33.775-.827.854-1.391l-1.485-.21a.57.57 0 0 1-.242.382zm-7.747-.725c.083.29.156.547.233.755c.079.215.179.43.34.628l1.16-.953a.7.7 0 0 1-.092-.192a11 11 0 0 1-.2-.652zm.574 1.383c.359.437.878.711 1.437.78l.183-1.49a.7.7 0 0 1-.461-.243zm.868-1.797c-.09-.311-.145-.506-.177-.657a.6.6 0 0 1-.023-.197l-1.486-.21a2 2 0 0 0 .041.715c.046.217.12.473.203.763zm.961-3.063c-.317.08-.663.166-.958.254c-.256.076-.603.188-.835.354l.874 1.22c-.02.014-.006 0 .082-.034q.116-.046.307-.103c.257-.076.568-.154.894-.236zm-1.161 2.209a.57.57 0 0 1 .242-.381l-.874-1.22a2.07 2.07 0 0 0-.854 1.391zm.756-12.66l-2.766.691l.364 1.455l2.766-.692zM19.34 3.73c-.084-.29-.157-.547-.233-.755a2.1 2.1 0 0 0-.341-.628l-1.16.952a.7.7 0 0 1 .093.193c.053.145.11.34.199.652zm-3.17-.484c.332-.083.546-.136.713-.167a1 1 0 0 1 .263-.023l.183-1.489a2.3 2.3 0 0 0-.716.037c-.225.041-.494.109-.807.187zm2.596-.899a2.2 2.2 0 0 0-1.437-.78l-.183 1.49a.7.7 0 0 1 .46.242zm-1.83 4.86c.318-.08.663-.166.958-.254c.257-.076.604-.188.835-.354l-.873-1.22c.02-.014.005 0-.082.034q-.116.046-.308.103c-.257.076-.567.154-.894.236zm.962-3.063c.09.311.145.506.176.657c.03.143.025.188.024.197l1.485.21a2 2 0 0 0-.04-.716c-.046-.216-.12-.472-.203-.762zm.831 2.455c.46-.33.775-.827.854-1.391l-1.485-.21a.57.57 0 0 1-.242.381zm-7.747-.725c.083.29.156.546.233.754c.079.216.179.431.34.629l1.16-.953a.7.7 0 0 1-.092-.192a11 11 0 0 1-.2-.652zm3.515.397c-.326.081-.637.159-.9.213a4 4 0 0 1-.323.055c-.094.01-.118.006-.098.009l-.183 1.488c.281.035.637-.028.903-.083c.302-.061.648-.148.965-.227zm-2.941.986c.359.436.878.71 1.437.78l.183-1.49a.7.7 0 0 1-.461-.243zm.868-1.797c-.09-.311-.145-.507-.177-.657a.6.6 0 0 1-.023-.198l-1.486-.21a2 2 0 0 0 .041.716c.046.216.12.472.203.763zm.616-2.977c-.313.078-.582.145-.8.215c-.223.071-.444.16-.648.307l.874 1.22a1 1 0 0 1 .23-.098c.162-.052.376-.106.708-.189zm-.816 2.122a.57.57 0 0 1 .242-.38l-.874-1.22a2.07 2.07 0 0 0-.854 1.39zm1.734 2.6l1.714 5.973l1.442-.414L15.4 6.79zm5.231 5.04l-1.714-5.973l-1.442.414l1.714 5.973z"></svg:path>`,
})
export class SolarDumbbells2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2LineDuotoneIcon],svg[solar-dumbbells-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.044 7.089l.09-.745zm2.941.354l-.09.744zm1.638 3.496l.638.396zm-2.579.545l.09-.745a.75.75 0 0 0-.832.64zm1.68.096l-.181-.727zm.544-3.877l.353-.662zm.693.832l-.72.21zm-7.128-.857l-.637-.396zm.9-.642L4.55 6.31zm-1.237 3.046l-.72.21zm2.343 1.136l.743.104a.75.75 0 0 0-.653-.848zm-1.65-.304l.352-.662zm2.767 10.997l-.09.745zm-2.941-.354l.09-.744zm5.433-1.423l.742.104zm-.281 1.188l-.637-.395zm-.9.642l.183.727zm-1.106-4.182l-.743-.105a.75.75 0 0 0 .653.85zm1.65.304l.353-.662zm.693.832l-.72.21zm-7.408.331l.743.105zm.28-1.188l-.637-.396zm2.58-.545l-.09.745a.75.75 0 0 0 .832-.64zm-1.68-.096l-.182-.728zm-1.237 3.045l-.72.21zm.693.832l-.353.662zM5.955 7.834l2.94.353l.18-1.489l-2.941-.354zm4.206 1.813a10 10 0 0 1-.109.689a.7.7 0 0 1-.066.208l1.275.79c.137-.22.208-.452.258-.682c.047-.221.085-.49.128-.797zm-2.206 2.581c.338.041.704.085 1.023.11c.28.02.65.04.928-.03l-.363-1.455c.016-.004-.01.003-.11.004q-.133 0-.341-.015c-.28-.022-.61-.061-.958-.103zm2.031-1.684a.72.72 0 0 1-.443.309l.363 1.455a2.22 2.22 0 0 0 1.355-.973zm-1.09-2.357c.351.043.58.07.755.103a1 1 0 0 1 .265.075l.705-1.324a2.4 2.4 0 0 0-.697-.226c-.232-.043-.516-.077-.85-.117zm2.75 1.668c.044-.306.082-.576.097-.802a2.1 2.1 0 0 0-.062-.727l-1.44.419c.003.013.015.06.005.21c-.01.157-.039.363-.085.692zm-1.73-1.49a.64.64 0 0 1 .325.38l1.44-.42a2.14 2.14 0 0 0-1.06-1.284zm-5.62.605c.045-.328.075-.534.108-.689a.7.7 0 0 1 .066-.208l-1.274-.79a2.1 2.1 0 0 0-.258.682c-.048.22-.085.49-.128.797zm1.838-2.626c-.333-.04-.617-.074-.853-.088a2.4 2.4 0 0 0-.73.053l.363 1.455a1 1 0 0 1 .282-.01c.177.01.407.037.759.08zM4.47 8.074a.72.72 0 0 1 .444-.31L4.55 6.31c-.557.14-1.05.482-1.354.973zm-1.66.688c-.043.306-.082.576-.096.802c-.016.233-.011.476.062.727l1.44-.42a.7.7 0 0 1-.006-.209c.01-.157.04-.363.085-.692zm3.119 1.712a23 23 0 0 1-.954-.127a4 4 0 0 1-.335-.067c-.095-.024-.117-.037-.1-.028l-.704 1.324c.254.136.619.205.894.25c.315.052.681.096 1.02.137zm-3.153-.183a2.14 2.14 0 0 0 1.06 1.285l.705-1.324a.64.64 0 0 1-.325-.38zm4.27 10.875l-2.941-.353l-.18 1.489l2.941.354zm1.659-1.136c-.046.328-.076.534-.11.689a.7.7 0 0 1-.065.208l1.274.79a2.1 2.1 0 0 0 .258-.682c.048-.22.085-.49.128-.797zm-1.839 2.626c.333.04.617.074.853.088c.242.013.484.009.73-.053l-.363-1.455a1 1 0 0 1-.282.01c-.177-.01-.407-.037-.759-.08zm1.664-1.73a.72.72 0 0 1-.444.31l.364 1.455a2.22 2.22 0 0 0 1.354-.973zm-1.459-2.4c.348.042.679.082.954.128q.207.033.335.066c.095.024.117.037.1.028l.704-1.324c-.254-.136-.619-.205-.894-.25c-.315-.052-.681-.096-1.02-.137zm3.12 1.712c.042-.306.08-.576.095-.802a2.1 2.1 0 0 0-.062-.727l-1.44.42a.6.6 0 0 1 .006.209c-.01.157-.04.363-.085.692zm-1.732-1.49a.64.64 0 0 1 .325.38l1.44-.42a2.14 2.14 0 0 0-1.06-1.284zm-5.62.605c.046-.328.075-.534.109-.689a.7.7 0 0 1 .066-.208l-1.275-.79a2.1 2.1 0 0 0-.258.682c-.047.221-.085.49-.128.797zm2.206-2.581a26 26 0 0 0-1.022-.11c-.281-.02-.65-.04-.93.03l.364 1.455c-.016.004.01-.003.11-.004q.133 0 .341.015c.28.021.61.061.958.103zm-2.031 1.684a.72.72 0 0 1 .443-.309l-.363-1.455c-.558.14-1.05.482-1.355.973zm-1.66.69c-.044.305-.082.575-.097.8c-.015.234-.01.477.062.728l1.44-.419a.7.7 0 0 1-.005-.21c.01-.157.039-.363.085-.692zm2.75 1.667c-.351-.043-.58-.07-.755-.103a1 1 0 0 1-.265-.075L2.38 21.96c.225.12.46.182.697.226c.232.043.516.077.85.117zm-2.785-.139a2.14 2.14 0 0 0 1.06 1.285l.705-1.323a.64.64 0 0 1-.325-.381zm4.38-3.053l.883-6.298l-1.486-.209l-.883 6.298zm1.603-6.241l-.884 6.297l1.486.209l.883-6.298z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.574 16.783l-.187-.727zm2.711-.7l.188.727zm1.065-3.607l.587-.468zm-2.493-.22l-.723.2a.75.75 0 0 0 .91.526zm1.563-.297l.094-.744zm1.034 3.716l.446.604zm.538-.895l.743.101zm-6.573 1.695l-.586.467zm.93.517l-.093.744zm-1.57-2.82l-.744-.103zm2.044-1.392l.188.726a.75.75 0 0 0 .535-.927zm-1.508.496l-.445-.604zm1.11-11.059l.188.727zm-2.71.7l-.188-.727zm5.29.733l-.723.202zm-.424-1.125l-.587.468zm-.93-.517l.093-.744zm-.474 4.212l-.188-.726a.75.75 0 0 0-.535.927zm1.508-.496l.445.604zm.537-.895l-.743-.102zm-6.996.57l-.723.2zm.424 1.125l.586-.467zm2.493.22l.723-.2a.75.75 0 0 0-.91-.526zm-1.563.297l.094-.744zm-1.572-2.82l.743.1zm.538-.896L12.1 2.72zm5.215 14.184l2.712-.7l-.375-1.452l-2.711.7zm4.736-4.109c-.082-.294-.153-.552-.228-.76a2.1 2.1 0 0 0-.332-.632l-1.173.935a.7.7 0 0 1 .092.199c.053.148.108.346.196.66zm-3.453-.418c.32-.083.624-.161.882-.215q.192-.04.313-.055c.09-.011.11-.006.087-.01l.188-1.487c-.283-.036-.637.03-.897.084c-.297.062-.636.15-.948.23zm2.893-.974a2.17 2.17 0 0 0-1.423-.793l-.188 1.488a.67.67 0 0 1 .438.24zm-1.464 4.802c.306-.08.571-.147.786-.218c.22-.073.44-.164.641-.313l-.891-1.207a.8.8 0 0 1-.22.095c-.157.052-.365.106-.69.19zm.579-3.008c.087.315.142.513.173.666c.03.147.025.196.024.21l1.486.203a2.1 2.1 0 0 0-.04-.712c-.044-.217-.117-.475-.198-.769zm.848 2.477a2.1 2.1 0 0 0 .835-1.398l-1.486-.203a.6.6 0 0 1-.24.394zm-7.627-.728c.082.294.153.551.228.76c.077.217.174.433.332.631l1.173-.935a.7.7 0 0 1-.092-.198a11 11 0 0 1-.196-.66zm3.114.505c-.326.084-.535.138-.697.169a.8.8 0 0 1-.246.023l-.188 1.488c.248.031.483.006.712-.038c.223-.041.487-.11.793-.19zm-2.554.886c.351.441.865.723 1.423.794l.188-1.488a.67.67 0 0 1-.438-.24zm.885-1.793a11 11 0 0 1-.173-.666a.7.7 0 0 1-.024-.21l-1.486-.204c-.034.252-.006.489.04.713c.044.217.116.475.198.769zm.918-3.095c-.311.08-.65.168-.94.257a5 5 0 0 0-.421.146a1.8 1.8 0 0 0-.405.215l.89 1.207c-.02.016-.008.003.077-.032q.111-.045.299-.102c.25-.077.554-.156.875-.239zm-1.115 2.219a.6.6 0 0 1 .24-.394l-.891-1.207a2.1 2.1 0 0 0-.835 1.397zM16.24 1.49l-2.712.7l.375 1.452l2.711-.7zm3.488 1.958c-.082-.294-.153-.551-.228-.76a2.1 2.1 0 0 0-.332-.631l-1.173.935a.7.7 0 0 1 .092.198c.053.148.108.346.196.66zm-3.114-.505c.326-.084.535-.138.697-.169a.8.8 0 0 1 .246-.023l.188-1.488a2.3 2.3 0 0 0-.712.037c-.223.042-.487.111-.793.19zm2.554-.886a2.17 2.17 0 0 0-1.423-.794l-.188 1.488a.67.67 0 0 1 .438.24zm-1.803 4.888c.311-.08.65-.168.94-.257c.146-.044.291-.093.422-.146c.12-.048.272-.118.404-.215l-.89-1.207c.02-.016.008-.003-.077.032q-.111.045-.299.102c-.25.077-.554.156-.875.239zm.918-3.094c.087.314.142.512.173.666c.03.146.026.195.024.21l1.486.203a2.1 2.1 0 0 0-.04-.713c-.044-.217-.116-.475-.198-.769zm.848 2.476c.454-.335.758-.836.835-1.397l-1.486-.204a.6.6 0 0 1-.24.394zM11.503 5.6c.082.294.153.552.228.76c.077.217.174.433.332.632l1.173-.935a.7.7 0 0 1-.092-.199a11 11 0 0 1-.196-.66zm3.453.418c-.32.083-.624.161-.882.215a4 4 0 0 1-.313.055c-.09.011-.11.006-.087.01l-.188 1.487c.283.036.637-.03.897-.084c.297-.062.636-.15.948-.23zm-2.893.974c.352.44.865.722 1.423.793l.188-1.488a.67.67 0 0 1-.438-.24zm.885-1.794a11 11 0 0 1-.173-.666a.7.7 0 0 1-.024-.21l-1.486-.203c-.034.252-.006.488.04.712c.044.217.117.475.198.769zm.58-3.008c-.307.08-.572.147-.787.218c-.22.073-.44.164-.641.313l.891 1.207a.8.8 0 0 1 .22-.095c.156-.052.365-.106.69-.19zm-.777 2.132a.6.6 0 0 1 .24-.394L12.1 2.721a2.1 2.1 0 0 0-.835 1.398zm1.67 2.624l1.68 6.035l1.445-.402l-1.68-6.036zm5.158 5.109L17.9 6.019l-1.445.402l1.68 6.036z"></svg:path>`,
})
export class SolarDumbbells2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2LinearIcon],svg[solar-dumbbells-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.044 7.089l.09-.745zm2.941.354l-.09.744zm1.638 3.496l.638.396zm-2.579.545l.09-.745a.75.75 0 0 0-.832.64zm1.68.096l-.181-.727zm.544-3.877l.353-.662zm.693.832l-.72.21zm-7.128-.857l-.637-.396zm.9-.642L4.55 6.31zm-1.237 3.046l-.72.21zm2.343 1.136l.743.104a.75.75 0 0 0-.653-.848zm-1.65-.304l.352-.662zm2.767 10.997l-.09.745zm-2.941-.354l.09-.744zm5.433-1.423l.742.104zm-.281 1.188l-.637-.395zm-.9.642l.183.727zm-1.106-4.182l-.743-.105a.75.75 0 0 0 .653.85zm1.65.304l.353-.662zm.693.832l-.72.21zm-7.408.331l.743.105zm.28-1.188l-.637-.396zm2.58-.545l-.09.745a.75.75 0 0 0 .832-.64zm-1.68-.096l-.182-.728zm-1.237 3.045l-.72.21zm.693.832l-.353.662zM5.955 7.834l2.94.353l.18-1.489l-2.941-.354zm4.206 1.813a10 10 0 0 1-.109.689a.7.7 0 0 1-.066.208l1.275.79c.137-.22.208-.452.258-.682c.047-.221.085-.49.128-.797zm-2.206 2.581c.338.041.704.085 1.023.11c.28.02.65.04.928-.03l-.363-1.455c.016-.004-.01.003-.11.004q-.133 0-.341-.015c-.28-.022-.61-.061-.958-.103zm2.031-1.684a.72.72 0 0 1-.443.309l.363 1.455a2.22 2.22 0 0 0 1.355-.973zm-1.09-2.357c.351.043.58.07.755.103a1 1 0 0 1 .265.075l.705-1.324a2.4 2.4 0 0 0-.697-.226c-.232-.043-.516-.077-.85-.117zm2.75 1.668c.044-.306.082-.576.097-.802a2.1 2.1 0 0 0-.062-.727l-1.44.419c.003.013.015.06.005.21c-.01.157-.039.363-.085.692zm-1.73-1.49a.64.64 0 0 1 .325.38l1.44-.42a2.14 2.14 0 0 0-1.06-1.284zm-5.62.605c.045-.328.075-.534.108-.689a.7.7 0 0 1 .066-.208l-1.274-.79a2.1 2.1 0 0 0-.258.682c-.048.22-.085.49-.128.797zm1.838-2.626c-.333-.04-.617-.074-.853-.088a2.4 2.4 0 0 0-.73.053l.363 1.455a1 1 0 0 1 .282-.01c.177.01.407.037.759.08zM4.47 8.074a.72.72 0 0 1 .444-.31L4.55 6.31c-.557.14-1.05.482-1.354.973zm-1.66.688c-.043.306-.082.576-.096.802c-.016.233-.011.476.062.727l1.44-.42a.7.7 0 0 1-.006-.209c.01-.157.04-.363.085-.692zm3.119 1.712a23 23 0 0 1-.954-.127a4 4 0 0 1-.335-.067c-.095-.024-.117-.037-.1-.028l-.704 1.324c.254.136.619.205.894.25c.315.052.681.096 1.02.137zm-3.153-.183a2.14 2.14 0 0 0 1.06 1.285l.705-1.324a.64.64 0 0 1-.325-.38zm4.27 10.875l-2.941-.353l-.18 1.489l2.941.354zm1.659-1.136c-.046.328-.076.534-.11.689a.7.7 0 0 1-.065.208l1.274.79a2.1 2.1 0 0 0 .258-.682c.048-.22.085-.49.128-.797zm-1.839 2.626c.333.04.617.074.853.088c.242.013.484.009.73-.053l-.363-1.455a1 1 0 0 1-.282.01c-.177-.01-.407-.037-.759-.08zm1.664-1.73a.72.72 0 0 1-.444.31l.364 1.455a2.22 2.22 0 0 0 1.354-.973zm-1.459-2.4c.348.042.679.082.954.128q.207.033.335.066c.095.024.117.037.1.028l.704-1.324c-.254-.136-.619-.205-.894-.25c-.315-.052-.681-.096-1.02-.137zm3.12 1.712c.042-.306.08-.576.095-.802a2.1 2.1 0 0 0-.062-.727l-1.44.42a.6.6 0 0 1 .006.209c-.01.157-.04.363-.085.692zm-1.732-1.49a.64.64 0 0 1 .325.38l1.44-.42a2.14 2.14 0 0 0-1.06-1.284zm-5.62.605c.046-.328.075-.534.109-.689a.7.7 0 0 1 .066-.208l-1.275-.79a2.1 2.1 0 0 0-.258.682c-.047.221-.085.49-.128.797zm2.206-2.581a26 26 0 0 0-1.022-.11c-.281-.02-.65-.04-.93.03l.364 1.455c-.016.004.01-.003.11-.004q.133 0 .341.015c.28.021.61.061.958.103zm-2.031 1.684a.72.72 0 0 1 .443-.309l-.363-1.455c-.558.14-1.05.482-1.355.973zm-1.66.69c-.044.305-.082.575-.097.8c-.015.234-.01.477.062.728l1.44-.419a.7.7 0 0 1-.005-.21c.01-.157.039-.363.085-.692zm2.75 1.667c-.351-.043-.58-.07-.755-.103a1 1 0 0 1-.265-.075L2.38 21.96c.225.12.46.182.697.226c.232.043.516.077.85.117zm-2.785-.139a2.14 2.14 0 0 0 1.06 1.285l.705-1.323a.64.64 0 0 1-.325-.381zm4.38-3.053l.883-6.298l-1.486-.209l-.883 6.298zm1.603-6.241l-.884 6.297l1.486.209l.883-6.298zm10.272 5.403l-.187-.727zm2.711-.7l.188.727zm1.065-3.607l.587-.468zm-2.493-.22l-.723.2a.75.75 0 0 0 .91.526zm1.563-.297l.094-.744zm1.034 3.716l.446.604zm.538-.895l.743.101zm-6.573 1.695l-.586.467zm.93.517l-.093.744zm-1.57-2.82l-.744-.103zm2.044-1.392l.188.726a.75.75 0 0 0 .535-.927zm-1.508.496l-.445-.604zm1.11-11.059l.188.727zm-2.71.7l-.188-.727zm5.29.733l-.723.202zm-.424-1.125l-.587.468zm-.93-.517l.093-.744zm-.474 4.212l-.188-.726a.75.75 0 0 0-.535.927zm1.508-.496l.445.604zm.537-.895l-.743-.102zm-6.996.57l-.723.2zm.424 1.125l.586-.467zm2.493.22l.723-.2a.75.75 0 0 0-.91-.526zm-1.563.297l.094-.744zm-1.572-2.82l.743.1zm.538-.896L12.1 2.72zm5.215 14.184l2.712-.7l-.375-1.452l-2.711.7zm4.736-4.109c-.082-.294-.153-.552-.228-.76a2.1 2.1 0 0 0-.332-.632l-1.173.935a.7.7 0 0 1 .092.199c.053.148.108.346.196.66zm-3.453-.418c.32-.083.624-.161.882-.215q.192-.04.313-.055c.09-.011.11-.006.087-.01l.188-1.487c-.283-.036-.637.03-.897.084c-.297.062-.636.15-.948.23zm2.893-.974a2.17 2.17 0 0 0-1.423-.793l-.188 1.488a.67.67 0 0 1 .438.24zm-1.464 4.802c.306-.08.571-.147.786-.218c.22-.073.44-.164.641-.313l-.891-1.207a.8.8 0 0 1-.22.095c-.157.052-.365.106-.69.19zm.579-3.008c.087.315.142.513.173.666c.03.147.025.196.024.21l1.486.203a2.1 2.1 0 0 0-.04-.712c-.044-.217-.117-.475-.198-.769zm.848 2.477a2.1 2.1 0 0 0 .835-1.398l-1.486-.203a.6.6 0 0 1-.24.394zm-7.627-.728c.082.294.153.551.228.76c.077.217.174.433.332.631l1.173-.935a.7.7 0 0 1-.092-.198a11 11 0 0 1-.196-.66zm3.114.505c-.326.084-.535.138-.697.169a.8.8 0 0 1-.246.023l-.188 1.488c.248.031.483.006.712-.038c.223-.041.487-.11.793-.19zm-2.554.886c.351.441.865.723 1.423.794l.188-1.488a.67.67 0 0 1-.438-.24zm.885-1.793a11 11 0 0 1-.173-.666a.7.7 0 0 1-.024-.21l-1.486-.204c-.034.252-.006.489.04.713c.044.217.116.475.198.769zm.918-3.095c-.311.08-.65.168-.94.257a5 5 0 0 0-.421.146a1.8 1.8 0 0 0-.405.215l.89 1.207c-.02.016-.008.003.077-.032q.111-.045.299-.102c.25-.077.554-.156.875-.239zm-1.115 2.219a.6.6 0 0 1 .24-.394l-.891-1.207a2.1 2.1 0 0 0-.835 1.397zM16.24 1.49l-2.712.7l.375 1.452l2.711-.7zm3.488 1.958c-.082-.294-.153-.551-.228-.76a2.1 2.1 0 0 0-.332-.631l-1.173.935a.7.7 0 0 1 .092.198c.053.148.108.346.196.66zm-3.114-.505c.326-.084.535-.138.697-.169a.8.8 0 0 1 .246-.023l.188-1.488a2.3 2.3 0 0 0-.712.037c-.223.042-.487.111-.793.19zm2.554-.886a2.17 2.17 0 0 0-1.423-.794l-.188 1.488a.67.67 0 0 1 .438.24zm-1.803 4.888c.311-.08.65-.168.94-.257c.146-.044.291-.093.422-.146c.12-.048.272-.118.404-.215l-.89-1.207c.02-.016.008-.003-.077.032q-.111.045-.299.102c-.25.077-.554.156-.875.239zm.918-3.094c.087.314.142.512.173.666c.03.146.026.195.024.21l1.486.203a2.1 2.1 0 0 0-.04-.713c-.044-.217-.116-.475-.198-.769zm.848 2.476c.454-.335.758-.836.835-1.397l-1.486-.204a.6.6 0 0 1-.24.394zM11.503 5.6c.082.294.153.552.228.76c.077.217.174.433.332.632l1.173-.935a.7.7 0 0 1-.092-.199a11 11 0 0 1-.196-.66zm3.453.418c-.32.083-.624.161-.882.215a4 4 0 0 1-.313.055c-.09.011-.11.006-.087.01l-.188 1.487c.283.036.637-.03.897-.084c.297-.062.636-.15.948-.23zm-2.893.974c.352.44.865.722 1.423.793l.188-1.488a.67.67 0 0 1-.438-.24zm.885-1.794a11 11 0 0 1-.173-.666a.7.7 0 0 1-.024-.21l-1.486-.203c-.034.252-.006.488.04.712c.044.217.117.475.198.769zm.58-3.008c-.307.08-.572.147-.787.218c-.22.073-.44.164-.641.313l.891 1.207a.8.8 0 0 1 .22-.095c.156-.052.365-.106.69-.19zm-.777 2.132a.6.6 0 0 1 .24-.394L12.1 2.721a2.1 2.1 0 0 0-.835 1.398zm1.67 2.624l1.68 6.035l1.445-.402l-1.68-6.036zm5.158 5.109L17.9 6.019l-1.445.402l1.68 6.036z"></svg:path>`,
})
export class SolarDumbbells2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2OutlineIcon],svg[solar-dumbbells-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.31 2.775c-.162.031-.371.085-.697.169l-2.711.699c-.326.084-.534.138-.691.19a.8.8 0 0 0-.22.095a.6.6 0 0 0-.24.394a.7.7 0 0 0 .024.21c.031.153.086.351.173.666c.088.314.143.512.196.66c.05.141.08.184.092.199a.67.67 0 0 0 .43.239c.003 0 .031 0 .095-.008q.12-.015.313-.055c.258-.054.561-.132.882-.215a.75.75 0 0 1 .91.525l1.68 6.036a.75.75 0 0 1-.535.927c-.32.083-.625.162-.875.239a4 4 0 0 0-.3.102c-.055.023-.08.036-.084.038a.6.6 0 0 0-.23.388a.7.7 0 0 0 .023.21c.031.153.086.351.173.665c.088.315.143.513.196.661c.05.14.08.183.092.198a.67.67 0 0 0 .438.24a.8.8 0 0 0 .246-.022c.162-.031.371-.085.697-.169l2.711-.699c.326-.084.535-.138.691-.19c.151-.05.2-.08.22-.095a.6.6 0 0 0 .24-.394a.7.7 0 0 0-.024-.21a11 11 0 0 0-.173-.666a11 11 0 0 0-.196-.66a.7.7 0 0 0-.092-.199a.67.67 0 0 0-.43-.239c-.003 0-.031 0-.095.008q-.12.015-.313.055c-.257.054-.561.132-.882.215a.75.75 0 0 1-.91-.525l-1.68-6.036a.75.75 0 0 1 .535-.927c.32-.083.625-.162.875-.239q.188-.057.3-.102c.055-.023.08-.036.084-.038a.6.6 0 0 0 .23-.388a.7.7 0 0 0-.023-.21a11 11 0 0 0-.173-.666a11 11 0 0 0-.196-.66a.7.7 0 0 0-.092-.198a.67.67 0 0 0-.438-.24a.8.8 0 0 0-.246.022m-.278-1.474c.229-.043.464-.069.712-.037c.558.07 1.072.353 1.423.794c.158.198.255.414.332.63c.073.204.142.454.222.738l.012.046c.08.285.149.534.192.746a2.1 2.1 0 0 1 .04.713a2.1 2.1 0 0 1-.835 1.397a2 2 0 0 1-.404.215c-.13.053-.276.102-.421.146l-.202.06l1.28 4.602q.12-.028.235-.052c.259-.054.613-.12.896-.084c.558.07 1.071.352 1.423.793c.158.199.255.415.332.631c.073.204.142.454.221.738l.013.046c.08.284.149.534.192.746c.046.224.074.46.04.712a2.1 2.1 0 0 1-.835 1.398a2.2 2.2 0 0 1-.641.313c-.21.069-.467.135-.764.212l-2.756.71c-.297.077-.554.143-.771.184a2.3 2.3 0 0 1-.712.038a2.17 2.17 0 0 1-1.423-.794a2.1 2.1 0 0 1-.332-.63c-.073-.204-.142-.454-.221-.738l-.013-.046c-.08-.285-.149-.535-.192-.746a2.1 2.1 0 0 1-.04-.713a2.1 2.1 0 0 1 .835-1.397a1.8 1.8 0 0 1 .405-.215a5 5 0 0 1 .42-.146l.203-.06l-1.281-4.602q-.12.028-.234.052c-.26.054-.614.12-.897.084a2.17 2.17 0 0 1-1.423-.793a2.1 2.1 0 0 1-.332-.631a12 12 0 0 1-.221-.738l-.013-.046c-.08-.284-.149-.534-.192-.746a2.1 2.1 0 0 1-.04-.712a2.1 2.1 0 0 1 .835-1.398a2.2 2.2 0 0 1 .641-.313c.21-.069.467-.135.764-.212l2.756-.71c.297-.077.554-.144.771-.185m-10.92 5.04l2.985.36c.323.039.6.072.827.114c.238.044.472.106.697.226c.508.27.897.727 1.06 1.284c.073.251.077.495.062.728c-.015.22-.051.481-.093.777l-.007.05c-.041.296-.078.557-.124.772a2.1 2.1 0 0 1-.258.683c-.305.49-.797.834-1.355.973c-.279.07-.648.05-.928.03l-.292-.027l-.677 4.823q.135.018.26.04c.276.045.641.114.895.25c.509.27.898.727 1.06 1.285c.073.25.078.494.062.727c-.014.22-.05.481-.092.777l-.007.05c-.042.296-.078.557-.125.772c-.05.23-.12.462-.258.683c-.305.49-.797.834-1.354.973a2.4 2.4 0 0 1-.73.053c-.231-.013-.508-.047-.832-.086L3.903 22.3c-.323-.039-.6-.072-.827-.114a2.14 2.14 0 0 1-1.756-1.51a2.1 2.1 0 0 1-.063-.728c.015-.22.051-.481.093-.777l.007-.05c.041-.296.078-.557.124-.772c.05-.23.121-.462.258-.683c.305-.49.797-.834 1.355-.973c.279-.07.648-.05.929-.03l.291.027l.677-4.823q-.135-.018-.26-.04c-.276-.045-.641-.114-.895-.25a2.14 2.14 0 0 1-1.06-1.285a2.1 2.1 0 0 1-.062-.727c.014-.22.05-.481.092-.777l.007-.05c.042-.296.078-.557.125-.772c.05-.23.12-.462.258-.683c.305-.49.797-.834 1.354-.973c.247-.062.489-.066.73-.053c.231.013.508.047.832.086m-.916 1.413a1 1 0 0 0-.282.01a.72.72 0 0 0-.444.31a.7.7 0 0 0-.066.207c-.033.155-.063.361-.109.69s-.074.534-.085.691a.7.7 0 0 0 .006.21c.042.144.15.285.32.377c0 0 .029.012.104.031q.129.033.335.067c.275.045.607.085.954.127a.75.75 0 0 1 .653.848l-.884 6.299a.75.75 0 0 1-.832.64a23 23 0 0 0-.957-.103a4 4 0 0 0-.343-.015c-.08 0-.113.006-.113.005a.72.72 0 0 0-.44.308a.7.7 0 0 0-.065.208c-.034.155-.063.361-.11.69c-.045.328-.074.534-.084.691c-.01.15.002.197.005.21a.64.64 0 0 0 .325.38a1 1 0 0 0 .265.075c.174.032.404.06.756.103l2.94.353c.352.043.582.07.76.08a1 1 0 0 0 .281-.01a.72.72 0 0 0 .444-.31a.7.7 0 0 0 .066-.207c.033-.155.063-.361.109-.69s.074-.534.085-.691a.7.7 0 0 0-.006-.21a.64.64 0 0 0-.319-.377s-.03-.012-.105-.031a4 4 0 0 0-.335-.066a23 23 0 0 0-.954-.128a.75.75 0 0 1-.653-.849l.884-6.297a.75.75 0 0 1 .832-.64c.347.04.678.08.958.102q.208.015.342.015c.08 0 .113-.006.113-.005a.72.72 0 0 0 .44-.308a.7.7 0 0 0 .065-.208c.034-.155.063-.361.11-.69c.045-.328.074-.534.084-.691a.7.7 0 0 0-.005-.21a.64.64 0 0 0-.325-.38a1 1 0 0 0-.265-.075c-.174-.032-.404-.06-.756-.103l-2.94-.353a14 14 0 0 0-.76-.08m4.347 3.099l.004-.001z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbells2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsBoldIcon],svg[solar-dumbbells-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.345 8.93l.344-2.84c.08-.662.12-.992.051-1.267a1.42 1.42 0 0 0-.624-.869c-.23-.142-.54-.185-1.157-.27c-.618-.087-.927-.13-1.184-.055c-.342.099-.634.34-.81.668c-.133.247-.216.933-.296 1.595l-6.132-.853c.08-.662.164-1.348.094-1.623a1.42 1.42 0 0 0-.624-.868c-.23-.142-.54-.185-1.157-.271c-.618-.086-.927-.13-1.183-.055c-.343.099-.634.34-.811.669c-.133.247-.173.577-.253 1.24l-.344 2.84c-.08.66-.12.992-.052 1.267c.093.366.317.679.625.868c.23.142.54.185 1.157.27c.618.087.926.13 1.183.056c.342-.1.634-.34.81-.669c.133-.247.217-.933.297-1.594l6.131.853c-.08.661-.163 1.347-.094 1.622c.092.367.317.68.624.869c.231.142.54.185 1.158.27c.617.087.926.13 1.183.055c.342-.099.634-.34.81-.668c.133-.247.173-.578.253-1.24M7.761 19.926l-.692-2.767c-.161-.644-.242-.967-.207-1.249c.046-.377.23-.718.512-.95c.21-.173.511-.259 1.113-.432c.602-.172.903-.259 1.166-.221c.352.05.67.246.886.548c.162.226.33.894.49 1.538l5.973-1.714c-.161-.645-.328-1.313-.294-1.595a1.46 1.46 0 0 1 .512-.95c.211-.173.512-.259 1.114-.432c.601-.172.902-.259 1.166-.221c.351.05.67.246.886.548c.162.226.242.548.404 1.192l.692 2.767c.16.644.241.966.207 1.249c-.047.376-.23.718-.512.949c-.21.173-.512.26-1.113.432c-.602.173-.903.26-1.167.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.329-.894-.49-1.538l-5.972 1.714c.16.644.328 1.312.293 1.595c-.046.376-.23.718-.511.949c-.211.173-.512.26-1.114.432c-.601.173-.902.26-1.166.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.243-.548-.404-1.192"></svg:path>`,
})
export class SolarDumbbellsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsBoldDuotoneIcon],svg[solar-dumbbells-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.345 8.93l.344-2.84c.08-.662.12-.992.051-1.267a1.42 1.42 0 0 0-.624-.869c-.23-.142-.54-.185-1.157-.27c-.618-.087-.927-.13-1.184-.055c-.342.099-.634.34-.81.668c-.133.247-.216.933-.296 1.595l-6.132-.853c.08-.662.164-1.348.094-1.623a1.42 1.42 0 0 0-.624-.868c-.23-.142-.54-.185-1.157-.271c-.618-.086-.927-.13-1.183-.055c-.343.099-.634.34-.811.669c-.133.247-.173.577-.253 1.24l-.344 2.84c-.08.66-.12.992-.052 1.267c.093.366.317.679.625.868c.23.142.54.185 1.157.27c.618.087.926.13 1.183.056c.342-.1.634-.34.81-.669c.133-.247.217-.933.297-1.594l6.131.853c-.08.661-.163 1.347-.094 1.622c.092.367.317.68.624.869c.231.142.54.185 1.158.27c.617.087.926.13 1.183.055c.342-.099.634-.34.81-.668c.133-.247.173-.578.253-1.24"></svg:path><svg:path fill="currentColor" d="m7.761 19.926l-.692-2.767c-.161-.644-.242-.967-.207-1.249c.046-.377.23-.718.512-.95c.21-.173.511-.259 1.113-.432c.602-.172.903-.259 1.166-.221c.352.05.67.246.886.548c.162.226.33.894.49 1.538l5.973-1.714c-.161-.645-.328-1.313-.294-1.595a1.46 1.46 0 0 1 .512-.95c.211-.173.512-.259 1.114-.432c.601-.172.902-.259 1.166-.221c.351.05.67.246.886.548c.162.226.242.548.404 1.192l.692 2.767c.16.644.241.966.207 1.249c-.047.376-.23.718-.512.949c-.21.173-.512.26-1.113.432c-.602.173-.903.26-1.167.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.329-.894-.49-1.538l-5.972 1.714c.16.644.328 1.312.293 1.595c-.046.376-.23.718-.511.949c-.211.173-.512.26-1.114.432c-.601.173-.902.26-1.166.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.243-.548-.404-1.192" opacity=".5"></svg:path>`,
})
export class SolarDumbbellsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsBrokenIcon],svg[solar-dumbbells-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.94 10.513l-.383.639zm-.53-2.491l.743.103a.766.766 0 0 0-.652-.848zm-.094 1.622l-.725.173zm3.776.526l.66.365zm-.81.668l.217.723zm.834-6.884l.383-.639zm.624.869l.726-.173zm-2.964-1.194l-.219-.723zm-1.107 2.263l-.09.744c.41.057.783-.23.833-.64zm.296-1.595l-.66-.365zM2.832 9.106l-.383.639zm-.624-.868l-.726.172zm4.071-1.07l.09-.744a.734.734 0 0 0-.833.641zm-.296 1.595l.66.365zm-.81.669l.217.722zm.834-6.884l.384-.64zm.53 2.49l-.742-.103a.766.766 0 0 0 .652.848zm.095-1.622l.725-.173zM3.667 2.222l-.218-.723zm-.81.669l-.66-.366zm13.09 3.096l-.345 2.84l1.486.207l.344-2.84zm-1.759 4.052c-.32-.044-.52-.073-.67-.105a.7.7 0 0 1-.194-.06l-.767 1.278c.22.135.45.204.673.252c.216.046.48.083.777.124zm-2.52-2.12c-.04.326-.083.68-.107.989c-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096q0-.127.014-.327c.021-.27.06-.588.1-.924zm1.656 1.955a.66.66 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335zm2.278-1.047c-.041.34-.069.56-.1.728a1 1 0 0 1-.07.25l1.32.73a2.3 2.3 0 0 0 .222-.679c.041-.225.075-.501.114-.822zm-1.594 2.701c.298.042.56.079.78.093c.229.015.467.01.711-.06l-.436-1.445a.6.6 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082zm1.424-1.724a.62.62 0 0 1-.369.312l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zm-.563-5.376c.32.044.52.073.67.105c.142.03.183.054.194.06l.766-1.278a2.1 2.1 0 0 0-.672-.252c-.216-.047-.48-.083-.778-.124zm2.563 1.766c.039-.322.073-.598.086-.827a2.4 2.4 0 0 0-.052-.717l-1.451.345a1 1 0 0 1 .009.26c-.01.171-.036.391-.078.732zm-1.7-1.6a.66.66 0 0 1 .283.401l1.45-.345a2.2 2.2 0 0 0-.966-1.335zm-.683-1.655a11 11 0 0 0-.781-.093a2 2 0 0 0-.71.06l.436 1.445a.6.6 0 0 1 .202-.005c.153.01.353.037.673.082zm-1.637 3.056c.04-.335.08-.654.123-.92q.034-.199.064-.32c.024-.092.036-.111.026-.092l-1.32-.731c-.133.248-.201.605-.246.87c-.05.306-.093.66-.133.986zm.145-3.089a2.1 2.1 0 0 0-1.252 1.026l1.32.73a.62.62 0 0 1 .369-.31zM3.002 7.074l.344-2.84l-1.486-.207l-.344 2.84zm1.077 1.558a10 10 0 0 1-.67-.105a.7.7 0 0 1-.194-.06L2.45 9.745c.22.135.448.205.672.253c.216.046.48.082.778.123zM1.516 6.867c-.039.321-.073.597-.086.826a2.3 2.3 0 0 0 .052.717l1.45-.345a1 1 0 0 1-.008-.26c.01-.17.036-.391.078-.731zm1.7 1.6a.66.66 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335zm2.32-1.402c-.04.336-.08.655-.123.92q-.034.199-.064.32c-.024.092-.036.111-.026.093l1.32.73c.133-.248.202-.604.246-.87c.05-.305.093-.66.133-.986zM3.9 10.121c.298.042.56.079.781.093c.228.015.466.011.71-.06L4.954 8.71a.6.6 0 0 1-.202.005a11 11 0 0 1-.673-.082zm1.424-1.723a.62.62 0 0 1-.369.311l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zM4.76 3.02c.32.045.52.073.67.105c.142.03.183.054.194.06l.767-1.277a2.1 2.1 0 0 0-.673-.253c-.216-.046-.48-.082-.778-.124zm2.52 2.12c.04-.325.083-.68.107-.988c.02-.27.04-.633-.03-.91l-1.45.346c-.006-.021.001 0 .002.095q0 .127-.015.328c-.02.269-.059.588-.1.923zM5.624 3.188a.66.66 0 0 1 .282.402l1.45-.346a2.2 2.2 0 0 0-.965-1.334zM4.94 1.532c-.298-.041-.56-.078-.78-.093a2 2 0 0 0-.711.06l.436 1.446a.6.6 0 0 1 .202-.006c.153.01.353.038.673.082zM3.346 4.233c.041-.34.068-.56.1-.728a1 1 0 0 1 .07-.249l-1.32-.73a2.3 2.3 0 0 0-.222.678c-.042.225-.075.501-.114.823zM3.45 1.5a2.1 2.1 0 0 0-1.253 1.026l1.32.731a.62.62 0 0 1 .369-.311zm2.998 4.284l6.132.853l.18-1.489l-6.131-.853zm6.054 1.494L6.37 6.425l-.18 1.49l6.131.852zM11.33 21.012l.457.583zm.219-2.544l-.721.207c-.1-.402.14-.82.539-.935zm.293 1.595l.738.072zm-4.802.07a.783.783 0 0 1 .54-.935a.72.72 0 0 1 .902.52zm1.125.985l-.605.458zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm.226 1.02a.773.773 0 0 1-.83.682a.73.73 0 0 1-.646-.825zm2.053-1.674l.124-.75zm1.377 2.086l.182.728a.72.72 0 0 1-.903-.521zm-.49-1.538l.605-.458zm10.637 3.33l.457.584zm.512-.948l.737.072zm-4.168-.483l-.182-.728a.72.72 0 0 1 .903.52zm.49 1.538l-.605.457zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.218 2.544l.72-.207a.78.78 0 0 1-.538.934zm-.294-1.595l-.737-.072zm2.792-1.603l.123-.75zm.886.548l.605-.458zm-10.35 8.688c.31-.09.506-.146.65-.2a.7.7 0 0 0 .188-.088l.913 1.166c-.2.164-.417.265-.633.344c-.208.076-.464.15-.755.233zm2.234-2.456c.08.318.166.663.227.966c.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4 4 0 0 0-.054-.321a22 22 0 0 0-.213-.901zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.793 1.46zm-2.392-.71c.083.331.137.546.189.707a1 1 0 0 0 .1.235l-1.211.915a2.3 2.3 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8zm1.917 2.453c-.29.083-.546.157-.762.203c-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024c.15-.031.346-.087.657-.176zM8.77 20.66c.107.15.256.235.405.256l-.247 1.499a2.04 2.04 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344c.209-.077.465-.15.755-.233zm-.84.288a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46zm.475-1.743c.29-.084.547-.158.763-.203c.223-.047.459-.076.709-.04l-.247 1.498a.6.6 0 0 0-.204.023c-.15.032-.346.088-.657.177zm2.005 2.8c-.082-.327-.16-.638-.236-.894a4 4 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83c.088.296.174.641.254.96zm-.532-3.043a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm10.984 2.638l-.692-2.767l1.441-.414l.692 2.767zm-.88 1.696c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.914 1.166a2.1 2.1 0 0 1-.634.344c-.208.076-.464.15-.754.233zm2.321-2.11c.079.313.146.582.188.807c.042.232.067.469.036.72l-1.475-.143a1 1 0 0 0-.024-.257a13 13 0 0 0-.166-.713zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.792 1.46zm-2.478-1.056c.082.326.16.637.236.894q.057.191.103.308c.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831c-.088-.295-.174-.64-.254-.958zm2.004 2.799c-.29.083-.547.157-.763.203a2 2 0 0 1-.71.04l.248-1.498c.013.002.06.006.203-.024c.151-.031.346-.087.658-.176zm-1.63-1.511a.6.6 0 0 0 .405.256l-.247 1.499a2.03 2.03 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344c.208-.077.464-.15.755-.233zm-2.235 2.456c-.08-.318-.166-.663-.227-.966c-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093q.014.126.054.322c.054.264.131.574.213.901zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46zm.474-1.743c.29-.083.547-.157.763-.203a2 2 0 0 1 .71-.04l-.248 1.498a.6.6 0 0 0-.203.023c-.15.032-.346.088-.657.177zm1.918 2.453a13 13 0 0 0-.189-.707a1 1 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644c.07.217.136.486.214.8zm-.446-2.697a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm-2.439 4.676l-5.972 1.714l-.364-1.455l5.972-1.715zm-5.817 2.333l5.972-1.714l.364 1.455l-5.972 1.714z"></svg:path>`,
})
export class SolarDumbbellsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsLineDuotoneIcon],svg[solar-dumbbells-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.94 10.513l-.383.639zm-.53-2.491l.743.103a.766.766 0 0 0-.652-.848zm-.094 1.622l-.725.173zm3.776.526l.66.365zm-.81.668l.217.723zm.834-6.884l.383-.639zm.624.869l.726-.173zm-2.964-1.194l-.219-.723zm-1.107 2.263l-.09.744c.41.057.783-.23.833-.64zm.296-1.595l-.66-.365zM2.832 9.106l-.383.639zm-.624-.868l-.726.172zm4.071-1.07l.09-.744a.734.734 0 0 0-.833.641zm-.296 1.595l.66.365zm-.81.669l.217.722zm.834-6.884l.384-.64zm.53 2.49l-.742-.103a.766.766 0 0 0 .652.848zm.095-1.622l.725-.173zM3.667 2.222l-.218-.723zm-.81.669l-.66-.366zm13.09 3.096l-.345 2.84l1.486.207l.344-2.84zm-1.759 4.052c-.32-.044-.52-.073-.67-.105a.7.7 0 0 1-.194-.06l-.767 1.278c.22.135.45.204.673.252c.216.046.48.083.777.124zm-2.52-2.12c-.04.326-.083.68-.107.989c-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096q0-.127.014-.327c.021-.27.06-.588.1-.924zm1.656 1.955a.66.66 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335zm2.278-1.047c-.041.34-.069.56-.1.728a1 1 0 0 1-.07.25l1.32.73a2.3 2.3 0 0 0 .222-.679c.041-.225.075-.501.114-.822zm-1.594 2.701c.298.042.56.079.78.093c.229.015.467.01.711-.06l-.436-1.445a.6.6 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082zm1.424-1.724a.62.62 0 0 1-.369.312l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zm-.563-5.376c.32.044.52.073.67.105c.142.03.183.054.194.06l.766-1.278a2.1 2.1 0 0 0-.672-.252c-.216-.047-.48-.083-.778-.124zm2.563 1.766c.039-.322.073-.598.086-.827a2.4 2.4 0 0 0-.052-.717l-1.451.345a1 1 0 0 1 .009.26c-.01.171-.036.391-.078.732zm-1.7-1.6a.66.66 0 0 1 .283.401l1.45-.345a2.2 2.2 0 0 0-.966-1.335zm-.683-1.655a11 11 0 0 0-.781-.093a2 2 0 0 0-.71.06l.436 1.445a.6.6 0 0 1 .202-.005c.153.01.353.037.673.082zm-1.637 3.056c.04-.335.08-.654.123-.92q.034-.199.064-.32c.024-.092.036-.111.026-.092l-1.32-.731c-.133.248-.201.605-.246.87c-.05.306-.093.66-.133.986zm.145-3.089a2.1 2.1 0 0 0-1.252 1.026l1.32.73a.62.62 0 0 1 .369-.31zM3.002 7.074l.344-2.84l-1.486-.207l-.344 2.84zm1.077 1.558a10 10 0 0 1-.67-.105a.7.7 0 0 1-.194-.06L2.45 9.745c.22.135.448.205.672.253c.216.046.48.082.778.123zM1.516 6.867c-.039.321-.073.597-.086.826a2.3 2.3 0 0 0 .052.717l1.45-.345a1 1 0 0 1-.008-.26c.01-.17.036-.391.078-.731zm1.7 1.6a.66.66 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335zm2.32-1.402c-.04.336-.08.655-.123.92q-.034.199-.064.32c-.024.092-.036.111-.026.093l1.32.73c.133-.248.202-.604.246-.87c.05-.305.093-.66.133-.986zM3.9 10.121c.298.042.56.079.781.093c.228.015.466.011.71-.06L4.954 8.71a.6.6 0 0 1-.202.005a11 11 0 0 1-.673-.082zm1.424-1.723a.62.62 0 0 1-.369.311l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zM4.76 3.02c.32.045.52.073.67.105c.142.03.183.054.194.06l.767-1.277a2.1 2.1 0 0 0-.673-.253c-.216-.046-.48-.082-.778-.124zm2.52 2.12c.04-.325.083-.68.107-.988c.02-.27.04-.633-.03-.91l-1.45.346c-.006-.021.001 0 .002.095q0 .127-.015.328c-.02.269-.059.588-.1.923zM5.624 3.188a.66.66 0 0 1 .282.402l1.45-.346a2.2 2.2 0 0 0-.965-1.334zM4.94 1.532c-.298-.041-.56-.078-.78-.093a2 2 0 0 0-.711.06l.436 1.446a.6.6 0 0 1 .202-.006c.153.01.353.038.673.082zM3.346 4.233c.041-.34.068-.56.1-.728a1 1 0 0 1 .07-.249l-1.32-.73a2.3 2.3 0 0 0-.222.678c-.042.225-.075.501-.114.823zM3.45 1.5a2.1 2.1 0 0 0-1.253 1.026l1.32.731a.62.62 0 0 1 .369-.311zm2.998 4.284l6.132.853l.18-1.489l-6.131-.853zm6.054 1.494L6.37 6.425l-.18 1.49l6.131.852z"></svg:path><svg:path fill="currentColor" d="m11.33 21.012l.457.583zm.219-2.544l-.721.207c-.1-.402.14-.82.539-.935zm.293 1.595l.738.072zm-3.677 1.055l-.605.458zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.512.949l-.738-.072zm2.791-1.603l.124-.75zm1.377 2.086l.182.728a.72.72 0 0 1-.903-.521zm-.49-1.538l.605-.458zm10.637 3.33l.457.584zm.512-.948l.737.072zm-4.168-.483l-.182-.728a.72.72 0 0 1 .903.52zm.49 1.538l-.605.457zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.218 2.544l.72-.207a.78.78 0 0 1-.538.934zm-.294-1.595l-.737-.072zm2.792-1.603l.123-.75zm.886.548l.605-.458zM7.79 16.952l.692 2.767l-1.442.413l-.692-2.766zm2.245 3.765c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.913 1.166c-.2.164-.417.265-.633.344c-.208.076-.464.15-.755.233zm2.235-2.456c.08.318.166.663.227.966c.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4 4 0 0 0-.054-.321a22 22 0 0 0-.213-.901zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.793 1.46zm-2.392-.71c.083.331.137.546.189.707a1 1 0 0 0 .1.235l-1.211.915a2.3 2.3 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8zm1.917 2.453c-.29.083-.546.157-.762.203c-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024c.15-.031.346-.087.657-.176zM8.77 20.66c.107.15.256.235.405.256l-.247 1.499a2.04 2.04 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344c.209-.077.465-.15.755-.233zm-2.322 2.11c-.078-.313-.146-.582-.187-.807a2.4 2.4 0 0 1-.037-.72l1.476.143a1 1 0 0 0 .023.257c.03.167.084.382.167.713zm1.482-1.822a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46zm.475-1.743c.29-.084.547-.158.763-.203c.223-.047.459-.076.709-.04l-.247 1.498a.6.6 0 0 0-.204.023c-.15.032-.346.088-.657.177zm2.005 2.8c-.082-.327-.16-.638-.236-.894a4 4 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83c.088.296.174.641.254.96zm-.532-3.043a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm10.984 2.638l-.692-2.767l1.441-.414l.692 2.767zm-.88 1.696c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.914 1.166a2.1 2.1 0 0 1-.634.344c-.208.076-.464.15-.754.233zm2.321-2.11c.079.313.146.582.188.807c.042.232.067.469.036.72l-1.475-.143a1 1 0 0 0-.024-.257a13 13 0 0 0-.166-.713zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.792 1.46zm-2.478-1.056c.082.326.16.637.236.894q.057.191.103.308c.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831c-.088-.295-.174-.64-.254-.958zm2.004 2.799c-.29.083-.547.157-.763.203a2 2 0 0 1-.71.04l.248-1.498c.013.002.06.006.203-.024c.151-.031.346-.087.658-.176zm-1.63-1.511a.6.6 0 0 0 .405.256l-.247 1.499a2.03 2.03 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344c.208-.077.464-.15.755-.233zm-2.235 2.456c-.08-.318-.166-.663-.227-.966c-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093q.014.126.054.322c.054.264.131.574.213.901zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46zm.474-1.743c.29-.083.547-.157.763-.203a2 2 0 0 1 .71-.04l-.248 1.498a.6.6 0 0 0-.203.023c-.15.032-.346.088-.657.177zm1.918 2.453a13 13 0 0 0-.189-.707a1 1 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644c.07.217.136.486.214.8zm-.446-2.697a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm-2.439 4.676l-5.972 1.714l-.364-1.455l5.972-1.715zm-5.817 2.333l5.972-1.714l.364 1.455l-5.972 1.714z" opacity=".5"></svg:path>`,
})
export class SolarDumbbellsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsLinearIcon],svg[solar-dumbbells-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.94 10.513l-.383.639zm-.53-2.491l.743.103a.766.766 0 0 0-.652-.848zm-.094 1.622l-.725.173zm3.775.526l.66.365zm-.81.668l.218.723zm.835-6.884l.383-.639zm.624.869l.725-.173zm-2.965-1.194l-.218-.723zM12.67 5.892l-.09.744c.41.057.783-.23.832-.64zm.296-1.595l-.66-.365zM2.832 9.106l-.384.639zm-.625-.868l-.725.172zm4.072-1.07l.09-.744a.734.734 0 0 0-.833.641zm-.296 1.595l.66.365zm-.81.669l.217.722zm.834-6.884l.383-.64zm.53 2.49l-.743-.103a.767.767 0 0 0 .653.848zm.094-1.622l.726-.173zM3.667 2.222l-.218-.723zm-.811.669l-.66-.366zm13.09 3.096l-.344 2.84l1.485.207l.345-2.84zm-1.758 4.052a11 11 0 0 1-.67-.105a.6.6 0 0 1-.194-.06l-.767 1.278c.22.135.449.204.673.252c.216.046.48.083.777.124zm-2.52-2.12c-.04.326-.083.68-.107.989c-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096q0-.127.014-.327c.02-.27.06-.588.1-.924zm1.656 1.955a.66.66 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335zm2.278-1.047c-.042.34-.069.56-.1.728a1 1 0 0 1-.07.25l1.32.73c.117-.219.178-.448.221-.679c.042-.225.075-.501.114-.822zm-1.595 2.701c.298.042.561.079.782.093c.227.015.465.01.71-.06l-.436-1.445a.6.6 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082zm1.425-1.724a.62.62 0 0 1-.37.312l.437 1.445a2.1 2.1 0 0 0 1.252-1.026zm-.564-5.376c.32.044.52.073.67.105c.143.03.184.054.194.06l.767-1.278a2.1 2.1 0 0 0-.672-.252c-.217-.047-.48-.083-.778-.124zm2.564 1.766c.039-.322.073-.598.086-.827a2.3 2.3 0 0 0-.053-.717l-1.45.345a1 1 0 0 1 .008.26c-.01.171-.036.391-.077.732zm-1.7-1.6a.66.66 0 0 1 .283.401l1.45-.345a2.2 2.2 0 0 0-.966-1.335zm-.683-1.655a11 11 0 0 0-.781-.093a2 2 0 0 0-.71.06l.435 1.445a.6.6 0 0 1 .203-.005c.153.01.353.037.672.082zm-1.637 3.056c.04-.335.08-.654.123-.92q.034-.199.064-.32c.023-.092.036-.111.026-.092l-1.32-.731c-.134.248-.202.605-.246.87c-.05.306-.094.66-.133.986zm.145-3.089a2.08 2.08 0 0 0-1.252 1.026l1.32.73a.62.62 0 0 1 .368-.31zM3.001 7.074l.345-2.84l-1.486-.207l-.344 2.84zM4.08 8.632a10 10 0 0 1-.67-.105a.6.6 0 0 1-.194-.06l-.767 1.278c.22.135.45.205.673.253c.216.046.48.082.777.123zM1.516 6.867c-.04.321-.073.597-.086.826c-.014.235-.01.473.052.717l1.45-.345a1 1 0 0 1-.008-.26c.01-.17.036-.391.077-.731zm1.699 1.6a.66.66 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335zm2.321-1.402c-.04.336-.08.655-.124.92a4 4 0 0 1-.064.32c-.023.092-.035.111-.025.093l1.32.73c.133-.248.201-.604.246-.87c.05-.305.093-.66.133-.986zm-1.638 3.056c.298.042.562.079.782.093c.228.015.466.011.71-.06L4.954 8.71a.6.6 0 0 1-.202.005a11 11 0 0 1-.673-.082zm1.425-1.723a.62.62 0 0 1-.369.311l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zM4.76 3.02c.32.045.52.073.67.105c.142.03.183.054.194.06L6.39 1.91a2.1 2.1 0 0 0-.672-.253c-.216-.046-.48-.082-.778-.124zm2.52 2.12c.04-.325.083-.68.106-.988c.021-.27.04-.633-.03-.91l-1.45.346c-.005-.021.002 0 .003.095q0 .127-.015.328a23 23 0 0 1-.1.923zM5.624 3.188a.66.66 0 0 1 .282.402l1.45-.346A2.2 2.2 0 0 0 6.39 1.91zM4.94 1.532c-.298-.041-.561-.078-.781-.093a2 2 0 0 0-.71.06l.436 1.446a.6.6 0 0 1 .202-.006c.153.01.353.038.673.082zM3.346 4.233c.041-.34.068-.56.1-.728a1 1 0 0 1 .07-.249l-1.32-.73a2.3 2.3 0 0 0-.222.678c-.042.225-.075.501-.114.823zM3.449 1.5a2.1 2.1 0 0 0-1.253 1.026l1.32.731a.62.62 0 0 1 .369-.311zm2.998 4.284l6.131.853l.181-1.489l-6.132-.853zM12.5 7.277l-6.132-.853l-.18 1.49l6.131.852zm-1.17 13.735l.457.583zm.219-2.544l-.721.207c-.1-.402.14-.82.539-.935zm.293 1.595l.738.072zm-3.677 1.055l-.605.458zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.512.949l-.738-.072zm2.791-1.603l.124-.75zm1.377 2.086l.182.728a.72.72 0 0 1-.903-.521zm-.49-1.538l.605-.458zm10.637 3.33l.457.584zm.512-.948l.737.072zm-4.168-.483l-.182-.728a.72.72 0 0 1 .903.52zm.49 1.538l-.605.457zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.218 2.544l.72-.207a.78.78 0 0 1-.538.934zm-.294-1.595l-.737-.072zm2.792-1.603l.123-.75zm.886.548l.605-.458zM7.79 16.952l.692 2.767l-1.442.413l-.692-2.766zm2.245 3.765c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.913 1.166c-.2.164-.417.265-.633.344c-.208.076-.464.15-.755.233zm2.235-2.456c.08.318.166.663.227.966c.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4 4 0 0 0-.054-.321a22 22 0 0 0-.213-.901zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.793 1.46zm-2.392-.71c.083.331.137.546.189.707a1 1 0 0 0 .1.235l-1.211.915a2.3 2.3 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8zm1.917 2.453c-.29.083-.546.157-.762.203c-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024c.15-.031.346-.087.657-.176zM8.77 20.66c.107.15.256.235.405.256l-.247 1.499a2.04 2.04 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344c.209-.077.465-.15.755-.233zm-2.322 2.11c-.078-.313-.146-.582-.187-.807a2.4 2.4 0 0 1-.037-.72l1.476.143a1 1 0 0 0 .023.257c.03.167.084.382.167.713zm1.482-1.822a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46zm.475-1.743c.29-.084.547-.158.763-.203c.223-.047.459-.076.709-.04l-.247 1.498a.6.6 0 0 0-.204.023c-.15.032-.346.088-.657.177zm2.005 2.8c-.082-.327-.16-.638-.236-.894a4 4 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83c.088.296.174.641.254.96zm-.532-3.043a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm10.984 2.638l-.692-2.767l1.441-.414l.692 2.767zm-.88 1.696c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.914 1.166a2.1 2.1 0 0 1-.634.344c-.208.076-.464.15-.754.233zm2.321-2.11c.079.313.146.582.188.807c.042.232.067.469.036.72l-1.475-.143a1 1 0 0 0-.024-.257a13 13 0 0 0-.166-.713zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.792 1.46zm-2.478-1.056c.082.326.16.637.236.894q.057.191.103.308c.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831c-.088-.295-.174-.64-.254-.958zm2.004 2.799c-.29.083-.547.157-.763.203a2 2 0 0 1-.71.04l.248-1.498c.013.002.06.006.203-.024c.151-.031.346-.087.658-.176zm-1.63-1.511a.6.6 0 0 0 .405.256l-.247 1.499a2.03 2.03 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344c.208-.077.464-.15.755-.233zm-2.235 2.456c-.08-.318-.166-.663-.227-.966c-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093q.014.126.054.322c.054.264.131.574.213.901zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46zm.474-1.743c.29-.083.547-.157.763-.203a2 2 0 0 1 .71-.04l-.248 1.498a.6.6 0 0 0-.203.023c-.15.032-.346.088-.657.177zm1.918 2.453a13 13 0 0 0-.189-.707a1 1 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644c.07.217.136.486.214.8zm-.446-2.697a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm-2.439 4.676l-5.972 1.714l-.364-1.455l5.972-1.715zm-5.817 2.333l5.972-1.714l.364 1.455l-5.972 1.714z"></svg:path>`,
})
export class SolarDumbbellsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsOutlineIcon],svg[solar-dumbbells-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.929 1.53l.049.007c.288.04.542.075.753.12c.224.048.452.118.67.252c.482.297.82.777.958 1.324c.069.274.05.636.03.906l-.024.257l4.657.648l.035-.228c.044-.266.112-.623.247-.874a2.1 2.1 0 0 1 1.263-1.034c.247-.071.486-.076.714-.06c.214.013.469.049.757.089l.048.007c.288.04.543.075.753.12c.225.048.452.117.67.251c.482.298.82.778.958 1.324c.061.243.066.48.052.715c-.012.224-.045.492-.083.804l-.35 2.885c-.037.311-.07.58-.111.8c-.043.23-.104.46-.223.681a2.1 2.1 0 0 1-1.263 1.035a2 2 0 0 1-.714.06c-.214-.014-.468-.05-.756-.09l-.05-.006c-.287-.04-.542-.076-.752-.12a2.1 2.1 0 0 1-.67-.252a2.17 2.17 0 0 1-.958-1.324c-.07-.275-.05-.636-.03-.907q.01-.124.023-.257l-4.656-.648l-.036.229c-.044.266-.112.623-.246.873a2.1 2.1 0 0 1-1.264 1.035a2 2 0 0 1-.713.06c-.214-.014-.47-.05-.757-.09l-.049-.006c-.288-.04-.543-.075-.753-.12a2.1 2.1 0 0 1-.67-.252a2.17 2.17 0 0 1-.958-1.323a2.3 2.3 0 0 1-.052-.715c.013-.224.045-.492.083-.804l.35-2.885c.038-.312.07-.58.112-.8c.043-.23.104-.46.222-.681A2.1 2.1 0 0 1 3.458 1.5c.247-.071.486-.075.714-.06c.214.014.469.05.757.09m-.855 1.407a.6.6 0 0 0-.2.005a.6.6 0 0 0-.357.303a1 1 0 0 0-.07.247c-.031.167-.058.388-.1.728l-.344 2.84c-.041.34-.068.56-.077.731a1 1 0 0 0 .009.263a.67.67 0 0 0 .29.413a.7.7 0 0 0 .197.062c.15.032.35.06.67.105c.32.044.52.072.673.082a.6.6 0 0 0 .199-.005a.6.6 0 0 0 .354-.296c0-.002.012-.03.029-.097q.03-.121.064-.32c.044-.265.083-.585.123-.92a.75.75 0 0 1 .848-.653l6.132.854a.75.75 0 0 1 .64.833c-.04.335-.078.654-.099.923a4 4 0 0 0-.015.328c0 .074.006.104.005.104a.67.67 0 0 0 .289.407a.7.7 0 0 0 .197.061c.15.033.35.06.67.105s.52.072.673.082a.6.6 0 0 0 .199-.005a.6.6 0 0 0 .358-.302a1 1 0 0 0 .07-.247c.03-.168.058-.388.099-.728L15.944 6c.042-.34.068-.561.078-.732a.8.8 0 0 0-.01-.262a.67.67 0 0 0-.29-.413a.7.7 0 0 0-.197-.062c-.15-.032-.35-.06-.67-.105s-.52-.072-.672-.082a.6.6 0 0 0-.2.005a.6.6 0 0 0-.354.295c0 .003-.011.03-.028.097a4 4 0 0 0-.064.32a22 22 0 0 0-.124.92a.75.75 0 0 1-.848.653l-6.131-.853a.75.75 0 0 1-.641-.833c.04-.336.079-.655.1-.924q.015-.2.014-.327c0-.074-.005-.104-.005-.105a.67.67 0 0 0-.288-.406a.7.7 0 0 0-.197-.062c-.15-.032-.35-.06-.67-.105a11 11 0 0 0-.673-.082m15.123 9.309c-.15.032-.345.087-.657.177c-.311.089-.506.145-.652.199a.7.7 0 0 0-.192.091a.7.7 0 0 0-.243.455s0 .03.009.105q.015.126.054.322c.054.264.132.574.213.901a.75.75 0 0 1-.52.903l-5.973 1.714a.75.75 0 0 1-.934-.539c-.082-.327-.16-.637-.236-.894a4 4 0 0 0-.103-.307a1 1 0 0 0-.04-.09a.57.57 0 0 0-.375-.234a.6.6 0 0 0-.197.023c-.15.032-.346.087-.657.177c-.311.089-.507.145-.652.199a.7.7 0 0 0-.192.091a.7.7 0 0 0-.244.462a1 1 0 0 0 .024.262c.03.167.083.382.166.713l.692 2.767c.083.331.137.546.189.707c.05.155.082.209.097.23a.57.57 0 0 0 .381.243c.01.001.054.006.198-.024c.15-.031.346-.087.657-.176c.311-.09.506-.146.652-.2a.7.7 0 0 0 .192-.091a.7.7 0 0 0 .243-.455s0-.03-.008-.105a4 4 0 0 0-.055-.322a22 22 0 0 0-.213-.9a.75.75 0 0 1 .52-.904l5.973-1.714a.75.75 0 0 1 .934.539c.082.327.16.637.236.894q.057.191.103.308c.024.06.038.086.04.09a.57.57 0 0 0 .375.234c.01.001.054.006.197-.024c.15-.031.346-.087.657-.176c.312-.09.507-.146.652-.2a.7.7 0 0 0 .193-.091a.7.7 0 0 0 .243-.462a1 1 0 0 0-.023-.262a13 13 0 0 0-.167-.713l-.692-2.767a13 13 0 0 0-.189-.706a1 1 0 0 0-.097-.231a.57.57 0 0 0-.381-.242a.6.6 0 0 0-.198.023m-.308-1.468a2 2 0 0 1 .715-.04a2.06 2.06 0 0 1 1.698 1.501c.068.212.133.474.21.777l.702 2.81c.076.304.142.566.182.786c.042.232.067.467.037.716a2.2 2.2 0 0 1-.78 1.437a2.1 2.1 0 0 1-.628.34c-.203.075-.45.146-.731.227l-.048.013c-.28.08-.528.152-.738.196a2 2 0 0 1-.716.041a2.07 2.07 0 0 1-1.39-.854c-.167-.231-.279-.578-.355-.835l-.06-.207l-4.54 1.303l.057.262c.054.265.117.621.082.902a2.2 2.2 0 0 1-.78 1.438a2.1 2.1 0 0 1-.628.34c-.202.075-.45.146-.73.227l-.048.013c-.28.08-.528.152-.739.196a2 2 0 0 1-.715.041a2.07 2.07 0 0 1-1.391-.854a2.3 2.3 0 0 1-.307-.648c-.068-.212-.133-.474-.21-.777l-.702-2.81c-.076-.304-.142-.566-.182-.786a2.3 2.3 0 0 1-.037-.715a2.2 2.2 0 0 1 .78-1.437c.197-.162.413-.262.628-.341c.203-.075.45-.146.732-.226l.047-.014c.28-.08.528-.152.738-.196a2 2 0 0 1 .716-.04a2.07 2.07 0 0 1 1.39.853c.167.232.279.579.355.835l.06.207l4.54-1.303q-.031-.135-.056-.261c-.055-.266-.118-.622-.083-.903a2.2 2.2 0 0 1 .78-1.437a2.1 2.1 0 0 1 .628-.341c.202-.075.45-.146.73-.226l.048-.014c.28-.08.529-.152.739-.196" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbellsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthBoldIcon],svg[solar-earth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.437 18.276c.988-1.862 4.281-1.862 4.281-1.862c3.432-.036 3.896-2.12 4.206-3.173a10.006 10.006 0 0 1-8.535 8.664c-.323-.68-.705-2.21.048-3.629"></svg:path><svg:path fill="currentColor" d="m5.006 5.834l-.412-.352a2 2 0 0 1-.098-.092A9.96 9.96 0 0 0 2 12c0 5.46 4.377 9.9 9.814 9.998c-.353-1.055-.584-2.764.298-4.425c.81-1.526 2.44-2.127 3.478-2.383a10 10 0 0 1 2.063-.275h.053c1.381-.016 1.917-.423 2.164-.702c.306-.344.426-.752.593-1.321l.022-.074a1.5 1.5 0 0 1 1.512-1.075a9.96 9.96 0 0 0-2.598-6.47c-.032.177-.07.343-.107.489c-.17.661-.454 1.375-.804 1.905c-.341.52-.949.983-1.352 1.273c-.305.219-.617.4-.873.549l-.092.053c-.232.133-.416.24-.592.355c-.356.235-.57.444-.714.727c.088.322.15.693.152 1.08c.002.922-.47 1.65-1.033 2.104a3.16 3.16 0 0 1-2 .692c-2.95-.032-4.68-2.439-4.903-4.918c-.065-.721-.389-1.498-.842-2.222a8 8 0 0 0-1.233-1.526"></svg:path><svg:path fill="currentColor" d="M8.575 9.447C8.388 7.363 6.781 5.421 6 4.711l-.43-.37A9.96 9.96 0 0 1 12 2c2.214 0 4.26.72 5.916 1.936c.234.711-.212 2.196-.68 2.906c-.17.257-.554.577-.976.88c-.95.683-2.15 1.02-2.76 2.278a1.42 1.42 0 0 0-.083 1.016c.06.22.1.459.1.692c.002.755-.762 1.3-1.517 1.292c-1.964-.021-3.25-1.604-3.425-3.553"></svg:path>`,
})
export class SolarEarthBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthBoldDuotoneIcon],svg[solar-earth-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M8.575 9.447C8.388 7.363 6.781 5.421 6 4.711l-.43-.37A9.96 9.96 0 0 1 12 2c2.214 0 4.26.72 5.916 1.936c.234.711-.212 2.196-.68 2.906c-.17.257-.554.577-.976.88c-.95.683-2.15 1.02-2.76 2.278a1.42 1.42 0 0 0-.083 1.016c.06.22.1.459.1.692c.002.755-.762 1.3-1.517 1.292c-1.964-.021-3.25-1.604-3.425-3.553m4.862 8.829c.988-1.862 4.281-1.862 4.281-1.862c3.432-.036 3.896-2.12 4.206-3.173a10.006 10.006 0 0 1-8.535 8.664c-.323-.68-.705-2.21.048-3.629"></svg:path>`,
})
export class SolarEarthBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthBrokenIcon],svg[solar-earth-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"></svg:path><svg:path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"></svg:path><svg:path stroke-linecap="round" d="M7 20.662A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"></svg:path></svg:g>`,
})
export class SolarEarthBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthLineDuotoneIcon],svg[solar-earth-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737C8.75 11.396 10.035 12.98 12 13c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-3.293 0-4.281 1.862c-.791 1.49-.33 3.103 0 3.724" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEarthLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthLinearIcon],svg[solar-earth-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737C8.75 11.396 10.035 12.98 12 13c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-3.293 0-4.281 1.862c-.791 1.49-.33 3.103 0 3.724"></svg:path></svg:g>`,
})
export class SolarEarthLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthOutlineIcon],svg[solar-earth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.578 5.343a9.25 9.25 0 0 0 6.803 15.9c-.206-.912-.234-2.138.393-3.319c.652-1.229 2.002-1.762 2.995-2.006a9.2 9.2 0 0 1 1.898-.254h.043c1.673-.018 2.426-.562 2.826-1.08c.342-.444.47-.887.602-1.336l.05-.172A9.22 9.22 0 0 0 18.6 5.519l-.027.1c-.163.594-.425 1.202-.711 1.636c-.256.388-.752.78-1.164 1.076a10 10 0 0 1-.902.56c-.228.132-.433.25-.63.38c-.432.286-.766.593-.991 1.056a.67.67 0 0 0-.035.49c.075.272.126.578.126.889c.002.649-.328 1.176-.753 1.518a2.4 2.4 0 0 1-1.521.526c-2.455-.027-3.965-2.02-4.164-4.236c-.08-.881-.466-1.773-.954-2.552a8.8 8.8 0 0 0-1.296-1.62m1.167-.956a10.5 10.5 0 0 1 1.4 1.779c.558.89 1.069 2.012 1.177 3.214c.15 1.68 1.213 2.854 2.686 2.87a.9.9 0 0 0 .563-.194c.146-.117.196-.24.195-.346c0-.156-.026-.328-.072-.495a2.16 2.16 0 0 1 .131-1.542c.385-.794.956-1.285 1.514-1.653c.239-.158.487-.3.71-.43l.09-.05c.255-.148.48-.28.683-.427c.431-.31.704-.557.787-.684c.183-.276.388-.734.518-1.207c.103-.374.131-.662.122-.84A9.2 9.2 0 0 0 12 2.75a9.2 9.2 0 0 0-5.255 1.637M22.68 13.24q.07-.61.071-1.24c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12S6.063 22.75 12 22.75c5.46 0 9.97-4.071 10.659-9.344a3 3 0 0 1 .048-.156zm-2.774 3.567c-.596.218-1.314.348-2.179.357h-.031l-.09.003a7.7 7.7 0 0 0-1.477.208c-.902.221-1.693.62-2.029 1.252c-.456.859-.39 1.793-.22 2.432a9.26 9.26 0 0 0 6.026-4.252" clip-rule="evenodd"></svg:path>`,
})
export class SolarEarthOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingBoldIcon],svg[solar-electric-refueling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v13.25H2a.75.75 0 0 0 0 1.5h15.25a.75.75 0 0 0 0-1.5H16v-3.5h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582a9 9 0 0 0-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195c.443.397.711.954.745 1.549a6 6 0 0 1 .003.306V8h-.75A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423l1.224.408v4.75a.75.75 0 0 1-1.5 0v-.071a2.18 2.18 0 0 0-2.179-2.179H16V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2m-.114 7.357a.75.75 0 0 1 .257 1.029l-.818 1.364H11a.75.75 0 0 1 .643 1.136l-1.5 2.5a.75.75 0 1 1-1.286-.772l.818-1.364H8a.75.75 0 0 1-.643-1.136l1.5-2.5a.75.75 0 0 1 1.029-.257" clip-rule="evenodd"></svg:path>`,
})
export class SolarElectricRefuelingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingBoldDuotoneIcon],svg[solar-electric-refueling-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v13.25h13V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3 21.25H2a.75.75 0 0 0 0 1.5h15.25a.75.75 0 0 0 0-1.5zm7.143-10.864a.75.75 0 1 0-1.286-.772l-1.5 2.5A.75.75 0 0 0 8 13.25h1.675l-.818 1.364a.75.75 0 0 0 1.286.772l1.5-2.5A.75.75 0 0 0 11 11.75H9.325zM16 17.75h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582a9 9 0 0 0-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195c.443.397.711.954.745 1.549a6 6 0 0 1 .003.306V8h-.75A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423l1.224.408v4.75a.75.75 0 0 1-1.5 0v-.071a2.18 2.18 0 0 0-2.179-2.179H16z"></svg:path>`,
})
export class SolarElectricRefuelingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingBrokenIcon],svg[solar-electric-refueling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16 22v-7M3 22v-4m0-4V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h1c2.828 0 4.243 0 5.121.879C16 3.757 16 5.172 16 8v3"></svg:path><svg:path stroke-linejoin="round" d="M9.5 10L8 12.5h3L9.5 15"></svg:path><svg:path d="M17 22H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"></svg:path><svg:path d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14"></svg:path></svg:g>`,
})
export class SolarElectricRefuelingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingLineDuotoneIcon],svg[solar-electric-refueling-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 10L8 12.5h3L9.5 15" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 22H2"></svg:path><svg:path fill="currentColor" d="M19.969 3.414a.75.75 0 1 0-.937 1.172zm.764 1.572l.469-.585zM16 16.25a.75.75 0 0 0 0 1.5zm5.003-11.042l-.501.559zm.992 2.066l.75-.042zM22 8.75a.75.75 0 0 0 0-1.5zm-1.974 4.592l-.238.711zm1.737 1.37a.75.75 0 0 0 .474-1.423zM19.03 4.586l1.234.986l.937-1.171l-1.234-.987zm2.219 3.036V18.5h1.5V7.622zM19.75 18.5v-.071h-1.5v.071zm-2.179-2.25H16v1.5h1.571zm2.179 2.179a2.18 2.18 0 0 0-2.179-2.179v1.5c.375 0 .679.304.679.679zm.75.821a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.985-12.928c.144.116.194.156.237.195l1.001-1.117c-.082-.074-.17-.144-.301-.25zm2.485 2.05c0-.168 0-.28-.006-.39l-1.497.084a6 6 0 0 1 .003.306zm-2.248-1.855c.443.397.711.954.745 1.549l1.497-.084a3.75 3.75 0 0 0-1.24-2.582zM22 7.25h-1.5v1.5H22zM18.25 9.5v2.419h1.5V9.5zm1.538 4.553l1.975.658l.474-1.422l-1.974-.659zM18.25 11.92c0 .968.62 1.828 1.538 2.134l.475-1.423a.75.75 0 0 1-.513-.711zm2.25-4.67a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarElectricRefuelingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingLinearIcon],svg[solar-electric-refueling-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.5 10L8 12.5h3L9.5 15"></svg:path><svg:path stroke-linecap="round" d="M17 22H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"></svg:path><svg:path stroke-linecap="round" d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14"></svg:path></svg:g>`,
})
export class SolarElectricRefuelingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingOutlineIcon],svg[solar-electric-refueling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.945 1.25h1.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.305h.821c1.204 0 2.179.975 2.179 2.179v.071a.75.75 0 0 0 1.5 0v-3.96l-1.462-.487a2.25 2.25 0 0 1-1.538-2.134V9.5a2.25 2.25 0 0 1 2.25-2.25h.742a2.25 2.25 0 0 0-.74-1.483a6 6 0 0 0-.237-.195l-1.233-.986a.75.75 0 1 1 .936-1.172l1.25 1c.122.098.206.165.285.236a3.75 3.75 0 0 1 1.241 2.582c.006.105.006.213.006.37V18.5a2.25 2.25 0 0 1-4.5 0v-.071a.68.68 0 0 0-.679-.679h-.821v3.5H17a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25V7.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117m-5.195 20h11.5V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H9c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C3.752 5.562 3.75 6.564 3.75 8zm17.5-8.29V8.75h-.75a.75.75 0 0 0-.75.75v2.419c0 .323.207.61.513.711zM9.886 9.356a.75.75 0 0 1 .257 1.029l-.818 1.364H11a.75.75 0 0 1 .643 1.136l-1.5 2.5a.75.75 0 1 1-1.286-.772l.818-1.364H8a.75.75 0 0 1-.643-1.136l1.5-2.5a.75.75 0 0 1 1.029-.257" clip-rule="evenodd"></svg:path>`,
})
export class SolarElectricRefuelingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleBoldIcon],svg[solar-emoji-funny-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-3.815-6.25a.75.75 0 0 1 .91-.544c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.044 1.077a8.4 8.4 0 0 1-1.15.93l.159.321a1.5 1.5 0 0 1-2.693 1.322l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91m7.29-6.234c.215.8-.044 1.565-.577 1.707c-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19m-6.373 3.26c.534-.143.792-.907.578-1.707s-.82-1.333-1.354-1.19s-.792.907-.578 1.707s.82 1.333 1.354 1.19" clip-rule="evenodd"></svg:path>`,
})
export class SolarEmojiFunnyCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleBoldDuotoneIcon],svg[solar-emoji-funny-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.898 11.224c.533-.143.792-.908.578-1.708s-.821-1.333-1.355-1.19c-.533.143-.792.907-.577 1.708c.214.8.82 1.333 1.354 1.19m-5.796 1.553c.534-.143.792-.908.578-1.708s-.82-1.333-1.354-1.19s-.792.907-.578 1.708s.82 1.333 1.354 1.19m-.917 2.974a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066c1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078a8.4 8.4 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91"></svg:path>`,
})
export class SolarEmojiFunnyCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleBrokenIcon],svg[solar-emoji-funny-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.928 4.927A9.95 9.95 0 0 1 9.412 2.34C14.746.91 20.23 4.077 21.659 9.411c1.43 5.335-1.736 10.818-7.07 12.248S3.77 19.922 2.34 14.588a9.95 9.95 0 0 1-.002-5.176"></svg:path></svg:g>`,
})
export class SolarEmojiFunnyCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleLineDuotoneIcon],svg[solar-emoji-funny-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnyCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleLinearIcon],svg[solar-emoji-funny-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnyCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleOutlineIcon],svg[solar-emoji-funny-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.475 9.516c.215.8-.044 1.565-.577 1.707c-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19M9.68 11.069c.214.8-.044 1.564-.578 1.707s-1.14-.39-1.354-1.19s.044-1.564.578-1.707s1.14.39 1.354 1.19"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m15.929 1.34a.75.75 0 0 1-.017 1.061q-.256.248-.536.476l.218.445a2.25 2.25 0 1 1-4.04 1.982l-.273-.556a8.9 8.9 0 0 1-3.8-.087a.75.75 0 1 1 .364-1.455c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017m-3.174 3.005l.146.298a.75.75 0 1 0 1.347-.66l-.127-.259a9 9 0 0 1-1.366.621" clip-rule="evenodd"></svg:path>`,
})
export class SolarEmojiFunnyCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareBoldIcon],svg[solar-emoji-funny-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.48 6.504c-.943 1.633-.388 3.706.724 7.853c1.11 4.147 1.666 6.22 3.3 7.163s3.706.387 7.853-.724s6.22-1.666 7.163-3.3s.387-3.706-.724-7.853s-1.666-6.22-3.3-7.163s-3.706-.388-7.853.724c-4.147 1.11-6.22 1.666-7.163 3.3m5.705 9.247a.75.75 0 0 1 .91-.545c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.278-1.815a.75.75 0 1 1 1.043 1.077a8.4 8.4 0 0 1-1.15.93l.159.32a1.5 1.5 0 1 1-2.693 1.323l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91m7.29-6.235c.215.8-.044 1.565-.577 1.707c-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19m-6.373 3.26c.534-.143.792-.907.578-1.707s-.82-1.333-1.354-1.19s-.792.907-.578 1.707s.82 1.333 1.354 1.19" clip-rule="evenodd"></svg:path>`,
})
export class SolarEmojiFunnySquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareBoldDuotoneIcon],svg[solar-emoji-funny-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.504 21.52c1.633.943 3.706.387 7.853-.724s6.22-1.666 7.163-3.3s.387-3.706-.724-7.853s-1.666-6.22-3.3-7.163s-3.706-.388-7.853.724c-4.147 1.11-6.22 1.666-7.163 3.3s-.388 3.706.724 7.853c1.11 4.147 1.666 6.22 3.3 7.163" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.898 11.224c.533-.143.792-.908.578-1.708s-.821-1.333-1.355-1.19c-.533.143-.792.907-.577 1.708c.214.8.82 1.333 1.354 1.19m-5.796 1.553c.534-.143.792-.908.578-1.708s-.82-1.333-1.354-1.19s-.792.907-.578 1.708s.82 1.333 1.354 1.19m-.917 2.974a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066c1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078a8.4 8.4 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91"></svg:path>`,
})
export class SolarEmojiFunnySquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareBrokenIcon],svg[solar-emoji-funny-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.796 9.643c1.111 4.147 1.667 6.22.724 7.853s-3.016 2.19-7.163 3.3c-4.147 1.111-6.22 1.667-7.853.724s-2.19-3.016-3.3-7.163c-1.112-4.147-1.667-6.22-.724-7.853s3.016-2.19 7.163-3.3c4.147-1.112 6.22-1.667 7.853-.724c1.009.582 1.606 1.595 2.177 3.26"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnySquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareLineDuotoneIcon],svg[solar-emoji-funny-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M3.204 14.357c-1.112-4.147-1.667-6.22-.724-7.853s3.016-2.19 7.163-3.3c4.147-1.112 6.22-1.667 7.853-.724s2.19 3.016 3.3 7.163c1.111 4.147 1.667 6.22.724 7.853s-3.016 2.19-7.163 3.3c-4.147 1.111-6.22 1.667-7.853.724s-2.19-3.016-3.3-7.163Z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnySquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareLinearIcon],svg[solar-emoji-funny-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M3.204 14.357c-1.112-4.147-1.667-6.22-.724-7.853s3.016-2.19 7.163-3.3c4.147-1.112 6.22-1.667 7.853-.724s2.19 3.016 3.3 7.163c1.111 4.147 1.667 6.22.724 7.853s-3.016 2.19-7.163 3.3c-4.147 1.111-6.22 1.667-7.853.724s-2.19-3.016-3.3-7.163Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnySquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareOutlineIcon],svg[solar-emoji-funny-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.475 9.516c.215.8-.044 1.564-.577 1.707c-.534.143-1.14-.39-1.355-1.19c-.214-.8.045-1.564.578-1.707c.534-.143 1.14.39 1.354 1.19M9.68 11.069c.214.8-.044 1.565-.578 1.708s-1.14-.39-1.354-1.19s.044-1.565.578-1.708s1.14.39 1.354 1.19"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.608 2.815c-1.18.152-2.677.552-4.77 1.113c-2.095.561-3.592.964-4.689 1.422c-1.077.45-1.663.911-2.02 1.529c-.356.617-.463 1.355-.314 2.513c.152 1.18.552 2.677 1.113 4.77c.561 2.095.964 3.592 1.422 4.689c.45 1.077.911 1.663 1.529 2.02c.617.356 1.355.463 2.513.314c1.18-.152 2.677-.552 4.77-1.113c2.095-.561 3.592-.964 4.689-1.422c1.077-.45 1.663-.911 2.02-1.529c.356-.617.463-1.355.314-2.513c-.152-1.18-.552-2.677-1.113-4.77c-.561-2.095-.964-3.592-1.422-4.689c-.45-1.077-.911-1.663-1.529-2.02c-.617-.356-1.355-.463-2.513-.314m-.192-1.487c1.324-.171 2.44-.084 3.455.502c1.016.587 1.65 1.51 2.163 2.741c.502 1.201.929 2.796 1.472 4.823l.03.11c.543 2.027.97 3.621 1.136 4.912c.171 1.324.084 2.44-.503 3.455c-.586 1.016-1.508 1.65-2.74 2.163c-1.201.502-2.796.929-4.823 1.472l-.11.03c-2.027.543-3.622.97-4.912 1.136c-1.324.171-2.44.084-3.455-.503c-1.016-.586-1.65-1.508-2.163-2.74c-.502-1.201-.93-2.796-1.472-4.823l-.03-.11c-.543-2.027-.97-3.622-1.136-4.912c-.171-1.324-.084-2.44.502-3.455c.587-1.016 1.51-1.65 2.741-2.163c1.201-.502 2.796-.93 4.823-1.472l.11-.03c2.027-.543 3.622-.97 4.912-1.136M17.18 13.34a.75.75 0 0 1-.017 1.06a8 8 0 0 1-.536.476l.218.444a2.25 2.25 0 0 1-4.04 1.983l-.273-.556a8.9 8.9 0 0 1-3.8-.088a.75.75 0 1 1 .364-1.454c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017m-3.174 3.004l.146.298a.75.75 0 0 0 1.347-.66l-.127-.259a9 9 0 0 1-1.366.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarEmojiFunnySquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallBoldIcon],svg[solar-end-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13.478v-.616s0-1.466 4-1.466s4 1.466 4 1.466v.388c0 .956.723 1.77 1.7 1.912l2 .294c1.21.177 2.3-.73 2.3-1.913v-2.125c0-.587-.184-1.164-.63-1.562C20.23 8.837 17.42 7 12 7c-5.749 0-8.56 2.583-9.56 3.789c-.315.381-.44.864-.44 1.352v1.923c0 1.298 1.296 2.228 2.58 1.852l2-.587c.843-.247 1.42-.998 1.42-1.85"></svg:path>`,
})
export class SolarEndCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallBoldDuotoneIcon],svg[solar-end-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 12.862v.617c0 .852-.577 1.604-1.42 1.85l-2 .587C3.296 16.292 2 15.363 2 14.065v-1.923c0-.49.125-.971.44-1.353c.734-.884 2.44-2.507 5.56-3.311zm8 0v.388c0 .957.723 1.77 1.7 1.913l2 .293c1.21.177 2.3-.729 2.3-1.913V11.42c0-.587-.184-1.165-.63-1.563c-.817-.73-2.492-1.88-5.37-2.474z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 11.396c4 0 4 1.466 4 1.466v-5.48C14.862 7.147 13.536 7 12 7s-2.862.184-4 .478v5.384s0-1.466 4-1.466" opacity=".5"></svg:path>`,
})
export class SolarEndCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallBrokenIcon],svg[solar-end-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.008 12.895l-.75.02zm.016.63l.75-.018zm-1.37 1.857l-.2-.723zm-1.981.546l.2.723zm-2.623-1.96l-.75.018zM2 12l.75-.019zm9.85-4.995l.02-.75zm8.918 3.72a.75.75 0 1 0 1.016-1.104zm-4.775 2.38l.75-.019zm.01.397l.75-.019zm1.746 2l.13-.738zm2.004.353l.13-.739zm-7.79-4.354l.02-.75zm10.786 2.44a.75.75 0 1 0-1.5.037zM2.406 10.63l-.585-.47zm5.357-3.986a.75.75 0 1 0 .342 1.46zM4.724 9.536a.75.75 0 1 0-.835-1.247zm2.534 3.378l.016.63l1.5-.037l-.016-.63zm-.803 1.745l-1.982.546l.4 1.446l1.98-.546zm-3.655-.71l-.05-1.967l-1.499.038l.05 1.966zm9.03-6.193c5.22.138 7.9 2.013 8.938 2.97l1.016-1.104c-1.29-1.188-4.312-3.218-9.914-3.365zm3.413 5.369l.01.397l1.5-.038l-.01-.397zm2.376 3.117l2.004.352l.26-1.477l-2.004-.352zm-1.626-3.136l.75-.02v-.016l-.002-.02a1 1 0 0 0-.024-.166a1.6 1.6 0 0 0-.112-.33a2.2 2.2 0 0 0-.675-.807c-.686-.523-1.876-.94-3.947-.995l-.04 1.5c1.921.05 2.747.436 3.077.688c.16.121.21.216.225.246l.005.012l-.005-.046l-.001-.013v-.012c0-.001 0-.002.75-.021m-4.01-2.354c-2.065-.054-3.254.297-3.94.804c-.352.26-.557.55-.669.814a1.5 1.5 0 0 0-.114.46l-.002.076v.006c0 .001 0 .002.75-.017c.75-.018.75-.018.75-.016v.005l-.004.07q-.004.018.001.002a.5.5 0 0 1 .179-.193c.293-.217 1.082-.562 3.01-.511zm7.64 5.842c1.664.293 3.169-.953 3.126-2.653l-1.5.038c.019.721-.605 1.272-1.366 1.138zM2.751 11.982c-.01-.385.079-.681.24-.884l-1.17-.937c-.45.561-.585 1.244-.57 1.859zm12.502 1.54c.034 1.343 1.044 2.487 2.366 2.72l.26-1.477c-.636-.112-1.11-.668-1.126-1.28zm-10.78 1.683c-.796.22-1.652-.41-1.673-1.257l-1.5.038c.046 1.809 1.824 3.148 3.572 2.665zm2.801-1.66c.014.53-.319.976-.82 1.114l.4 1.446a2.61 2.61 0 0 0 1.92-2.598zm.83-5.44c1.05-.245 2.283-.387 3.726-.349l.04-1.5c-1.565-.04-2.927.112-4.107.388zm-5.112 2.993a7.7 7.7 0 0 1 1.732-1.562L3.89 8.289a9.2 9.2 0 0 0-2.068 1.872z"></svg:path>`,
})
export class SolarEndCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallLineDuotoneIcon],svg[solar-end-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M8 12.862v.616c0 .852-.577 1.604-1.42 1.851l-2 .586c-1.284.377-2.58-.553-2.58-1.85V12.14c0-.489.125-.97.44-1.352m18.93-.933c.446.398.63.975.63 1.562v2.125c0 1.184-1.09 2.09-2.3 1.913l-2-.294c-.977-.143-1.7-.956-1.7-1.912v-.388"></svg:path><svg:path fill="currentColor" d="M7.25 12.862a.75.75 0 0 0 1.5 0zM12 7v.75zm3.25 5.862a.75.75 0 0 0 1.5 0zM12 11.396v-.75zm-8.982-.129C3.902 10.201 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06zM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25zm4 5.112c.75 0 .75-.001.75-.002v-.016l-.004-.067a1.5 1.5 0 0 0-.126-.455a2.06 2.06 0 0 0-.677-.798c-.686-.503-1.873-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588c.149.11.19.192.198.21q.007.016.001-.002a.3.3 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002m-4-2.216c-2.07 0-3.257.375-3.943.878c-.351.257-.56.54-.677.798a1.5 1.5 0 0 0-.126.455l-.004.076v.007s0 .002.75.002s.75 0 .75.002v.006l-.006.072q-.005.018.001.001a.6.6 0 0 1 .198-.209c.314-.23 1.127-.588 3.057-.588z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEndCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallLinearIcon],svg[solar-end-call-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.862h-.75zm0 .616h.75zM6.58 15.33l-.211-.72zm-2 .587l-.211-.72zM2 14.064h.75zm0-1.923h.75zm.44-1.352l-.577-.479zM12 7v.75zm9.37 2.856l.5-.56zM16 13.25h-.75zm1.7 1.912l-.108.743zm2 .294l.11-.742zm2.3-1.913h-.75zm0-2.125h.75zm-10-.022v-.75zm-4.75 1.466v.616h1.5v-.616zm-.881 1.748l-2 .586l.422 1.44l2-.587zm-3.619-.546v-1.923h-1.5v1.923zm.268-2.797C3.902 10.201 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06zM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25zm3.25 5.112v.388h1.5v-.388zm2.342 3.043l2 .293l.217-1.485l-2-.293zm5.158-2.362v-2.125h-1.5v2.125zM16 12.862c.75 0 .75-.001.75-.002v-.016l-.004-.067a1.5 1.5 0 0 0-.126-.455a2.06 2.06 0 0 0-.677-.798c-.686-.503-1.874-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588c.149.11.19.192.198.21q.006.016.001-.002a.3.3 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002m-4-2.216c-2.07 0-3.257.375-3.943.878c-.351.257-.56.54-.677.798a1.5 1.5 0 0 0-.126.455l-.004.067v.016s0 .002.75.002s.75 0 .75.002v.006l-.006.072q-.005.018.001.001a.6.6 0 0 1 .198-.209c.314-.23 1.126-.588 3.057-.588zm7.592 5.552c1.634.24 3.158-.985 3.158-2.655h-1.5c0 .698-.655 1.286-1.44 1.17zm1.279-5.783c.242.217.379.563.379 1.003h1.5c0-.733-.23-1.542-.88-2.121zM2.75 12.141c0-.367.093-.662.268-.874l-1.155-.957c-.457.552-.613 1.22-.613 1.831zm12.5 1.109c0 1.347 1.014 2.46 2.342 2.655l.217-1.485c-.628-.092-1.059-.604-1.059-1.17zM4.37 15.196c-.838.245-1.62-.368-1.62-1.132h-1.5c0 1.833 1.81 3.079 3.54 2.571zm2.88-1.718c0 .505-.343.974-.881 1.132l.422 1.44c1.149-.338 1.959-1.372 1.959-2.572z"></svg:path>`,
})
export class SolarEndCallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallOutlineIcon],svg[solar-end-call-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 7.75c-5.487 0-8.098 2.451-8.982 3.517c-.175.212-.268.507-.268.874v1.923c0 .764.782 1.377 1.619 1.132l2-.586c.538-.158.881-.627.881-1.132v-.616H8c-.75 0-.75-.001-.75-.002v-.036a1 1 0 0 1 .022-.169c.018-.093.05-.207.108-.333c.117-.257.326-.54.677-.798c.686-.503 1.874-.878 3.943-.878s3.257.375 3.943.878c.351.257.56.54.677.798a1.5 1.5 0 0 1 .126.455l.003.048v.02l.001.008v.007s0 .002-.75.002h.75v.388c0 .566.431 1.078 1.06 1.17l2 .293c.785.116 1.44-.472 1.44-1.17v-2.125c0-.44-.137-.786-.38-1.003C19.866 9.517 17.234 7.75 12 7.75m3.25 5.184v.316c0 1.347 1.014 2.46 2.342 2.655l2 .293c1.634.24 3.158-.985 3.158-2.655v-2.125c0-.733-.23-1.542-.88-2.121C20.594 8.157 17.609 6.25 12 6.25c-6.01 0-9.021 2.714-10.137 4.06c-.457.552-.613 1.22-.613 1.831v1.923c0 1.833 1.81 3.079 3.54 2.571l2-.586c1.15-.336 1.96-1.371 1.96-2.57v-.545a.6.6 0 0 1 .193-.2c.314-.23 1.126-.588 3.057-.588c1.93 0 2.743.358 3.057.588c.13.095.178.17.193.2" clip-rule="evenodd"></svg:path>`,
})
export class SolarEndCallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedBoldIcon],svg[solar-end-call-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.607 16.897l1.34-.38C8.156 16.174 9 14.983 9 13.618c0 0 0-1.654 3-1.654s3 1.654 3 1.654c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.56 9.04 16.807 7 12 7s-7.56 2.039-8.917 3.503C2.277 11.373 2 12.613 2 13.85c0 2.06 1.782 3.565 3.607 3.047"></svg:path>`,
})
export class SolarEndCallRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedBoldDuotoneIcon],svg[solar-end-call-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.947 16.517l-1.34.38C3.782 17.415 2 15.91 2 13.85c0-1.237.277-2.477 1.083-3.347C4.128 9.376 6 7.908 9 7.292v6.326c0 1.365-.844 2.556-2.053 2.9m8.053-2.9c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.872 9.376 18 7.908 15 7.292z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 13.619s0-1.655 3-1.655s3 1.654 3 1.654V7.292A15 15 0 0 0 12 7c-1.106 0-2.103.108-3 .292z" opacity=".5"></svg:path>`,
})
export class SolarEndCallRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedBrokenIcon],svg[solar-end-call-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.917 10.503C19.56 9.04 16.807 7 12 7c-1.16 0-2.2.119-3.13.32M22 13.85c0 2.06-1.782 3.565-3.607 3.047l-1.34-.38C15.844 16.174 15 14.983 15 13.618c0 0 0-1.654-3-1.654s-3 1.653-3 1.654c0 1.365-.844 2.556-2.053 2.9l-1.34.38C3.782 17.414 2 15.91 2 13.85c0-1.237.277-2.477 1.083-3.347a10.2 10.2 0 0 1 2.55-1.985"></svg:path>`,
})
export class SolarEndCallRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedLineDuotoneIcon],svg[solar-end-call-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.083 10.503C2.277 11.373 2 12.613 2 13.851c0 2.06 1.782 3.564 3.607 3.047l1.34-.38C8.156 16.174 9 14.982 9 13.617m11.917-3.115c.806.87 1.083 2.11 1.083 3.348c0 2.06-1.782 3.564-3.607 3.047l-1.34-.38c-1.209-.343-2.053-1.535-2.053-2.9"></svg:path><svg:path d="M3.083 10.503C4.44 9.04 7.193 7 12 7s7.56 2.039 8.917 3.503M9 13.619s0-1.655 3-1.655s3 1.654 3 1.654" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEndCallRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedLinearIcon],svg[solar-end-call-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5.607 16.897l1.34-.38C8.156 16.174 9 14.983 9 13.618q0 0 0 0s0-1.654 3-1.654s3 1.654 3 1.654q0 0 0 0c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.56 9.04 16.807 7 12 7s-7.56 2.039-8.917 3.503C2.277 11.373 2 12.613 2 13.85c0 2.06 1.782 3.565 3.607 3.047Z"></svg:path>`,
})
export class SolarEndCallRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedOutlineIcon],svg[solar-end-call-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 7.75c-4.565 0-7.127 1.926-8.367 3.263c-.622.671-.883 1.687-.883 2.837c0 1.654 1.39 2.684 2.653 2.326l1.34-.38c.849-.241 1.507-1.11 1.507-2.177c0-.099.02-.726.57-1.332c.56-.619 1.544-1.073 3.18-1.073s2.62.454 3.18 1.073c.55.606.57 1.233.57 1.331c0 1.069.658 1.937 1.508 2.178l1.34.38c1.262.358 2.652-.672 2.652-2.326c0-1.15-.26-2.166-.883-2.837C19.127 9.676 16.565 7.75 12 7.75M2.533 9.993C4.008 8.403 6.95 6.25 12 6.25s7.992 2.152 9.467 3.743c.99 1.069 1.283 2.532 1.283 3.857c0 2.466-2.173 4.446-4.562 3.769l-1.34-.38c-1.56-.443-2.589-1.947-2.598-3.599a.7.7 0 0 0-.18-.345c-.19-.208-.706-.581-2.07-.581s-1.88.373-2.07.58a.7.7 0 0 0-.18.346c-.01 1.652-1.037 3.156-2.598 3.599l-1.34.38c-2.39.677-4.562-1.303-4.562-3.769c0-1.325.292-2.788 1.283-3.857" clip-rule="evenodd"></svg:path>`,
})
export class SolarEndCallRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserBoldIcon],svg[solar-eraser-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.41 5.505C13.08 3.835 13.915 3 14.952 3c1.038 0 1.873.835 3.543 2.505S21 8.01 21 9.048c0 1.037-.835 1.872-2.505 3.542l-4.193 4.194l-7.086-7.086z"></svg:path><svg:path fill="currentColor" d="m6.156 10.759l7.085 7.085l-.65.65c-.378.379-.713.714-1.018 1.006H21a.75.75 0 0 1 0 1.5H9c-1.016-.025-1.85-.86-3.495-2.505C3.835 16.825 3 15.99 3 14.952c0-1.037.835-1.872 2.505-3.542z"></svg:path>`,
})
export class SolarEraserBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserBoldDuotoneIcon],svg[solar-eraser-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.952 3c-1.037 0-1.872.835-3.542 2.505l-4.91 4.91l7.085 7.085l4.91-4.91C20.165 10.92 21 10.085 21 9.048c0-1.038-.835-1.873-2.505-3.543S15.99 3 14.952 3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.585 17.5L6.5 10.415l-.995.995C3.835 13.08 3 13.915 3 14.952c0 1.038.835 1.873 2.505 3.543S8.01 21 9.048 21c1.037 0 1.872-.835 3.542-2.505z"></svg:path><svg:path fill="currentColor" d="M9.033 21H9zm.03 0c.796-.006 1.476-.506 2.51-1.5H21a.75.75 0 0 1 0 1.5z" opacity=".5"></svg:path>`,
})
export class SolarEraserBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserBrokenIcon],svg[solar-eraser-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m5.505 11.41l.53.53zM3 14.952h-.75zm9.59 3.543l-.53-.53zM9.048 21v.75zM11.41 5.505l-.53-.53zm1.831 12.34a.75.75 0 0 0 1.06-1.061zM7.216 9.697a.75.75 0 1 0-1.06 1.061zm8.857 6.375a.75.75 0 1 0-1.06-1.06zm2.395-4.517a.75.75 0 1 0 1.064 1.056zm-12.433.384l5.905-5.905l-1.06-1.06l-5.905 5.904zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083zm1.06-1.06c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945zm2.362 10.749L7.216 9.698l-1.06 1.061l7.085 7.085zm.71-1.772l-2.952 2.953l1.06 1.06l2.953-2.952zm4.52-2.4c.661-.666 1.206-1.236 1.582-1.772c.388-.553.636-1.125.636-1.792h-1.5c0 .26-.086.534-.364.931c-.291.415-.746.9-1.418 1.577z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21h12"></svg:path></svg:g>`,
})
export class SolarEraserBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleBoldIcon],svg[solar-eraser-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.394 5.67C12.72 6.557 13.276 6 13.968 6s1.249.557 2.362 1.67S18 9.34 18 10.032s-.557 1.248-1.67 2.362l-2.619 2.618l-4.723-4.723zm-3.679 3.68l4.724 4.723l-.257.257C11.28 17.443 10.724 18 10.032 18s-1.249-.557-2.362-1.67S6 14.66 6 13.968s.557-1.248 1.67-2.362z" clip-rule="evenodd"></svg:path>`,
})
export class SolarEraserCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleBoldDuotoneIcon],svg[solar-eraser-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.606 7.67C12.72 6.557 13.276 6 13.968 6s1.249.557 2.362 1.67S18 9.34 18 10.032s-.557 1.248-1.67 2.362l-2.619 2.618l-4.723-4.723zm-3.679 3.68l4.724 4.723l-.257.257C11.28 17.443 10.724 18 10.032 18s-1.249-.557-2.362-1.67S6 14.66 6 13.968s.557-1.248 1.67-2.362z"></svg:path>`,
})
export class SolarEraserCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleBrokenIcon],svg[solar-eraser-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarEraserCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleLineDuotoneIcon],svg[solar-eraser-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEraserCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleLinearIcon],svg[solar-eraser-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path></svg:g>`,
})
export class SolarEraserCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleOutlineIcon],svg[solar-eraser-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.888 16.896c-.526.526-.973.974-1.378 1.283c-.432.329-.902.571-1.478.571s-1.046-.242-1.478-.571c-.405-.31-.852-.757-1.379-1.283l-.07-.071c-.527-.527-.975-.974-1.284-1.38c-.329-.43-.571-.901-.571-1.477s.242-1.046.571-1.478c.31-.405.757-.852 1.283-1.378l4.008-4.008c.526-.526.973-.974 1.378-1.283c.432-.329.902-.571 1.478-.571s1.046.242 1.478.571c.405.31.852.757 1.379 1.283l.07.071c.527.527.975.974 1.284 1.38c.329.43.571.901.571 1.477s-.242 1.046-.571 1.478c-.31.405-.757.852-1.283 1.378zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264s.27.036.568.264c.315.24.692.615 1.264 1.186c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568s-.036.27-.264.568c-.24.315-.615.692-1.186 1.263l-2.62 2.619l-3.662-3.663zm-3.68 3.68l3.663 3.663l-.257.257c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264s-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568s.036-.27.264-.568c.24-.315.615-.692 1.186-1.263z"></svg:path><svg:path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0"></svg:path></svg:g>`,
})
export class SolarEraserCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserLineDuotoneIcon],svg[solar-eraser-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m5.505 11.41l.53.53zM3 14.952h-.75zM9.048 21v.75zM11.41 5.505l-.53-.53zm6.555 6.555l-5.905 5.905l1.06 1.06l5.905-5.904zm-11.93-.12l5.905-5.905l-1.06-1.06l-5.905 5.904zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083zm1.06 7.086c.82-.82 1.49-1.488 1.945-2.084c.468-.614.78-1.24.78-1.99h-1.5c0 .29-.106.6-.473 1.08c-.38.498-.962 1.083-1.812 1.933zm0-8.146c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945z"></svg:path><svg:path fill="currentColor" d="M13.241 17.844a.75.75 0 0 0 1.06-1.06zM7.216 9.698a.75.75 0 1 0-1.06 1.061zm7.086 7.086L7.216 9.698l-1.06 1.061l7.085 7.085z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21h12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEraserLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserLinearIcon],svg[solar-eraser-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m5.505 11.41l.53.53zM3 14.952h-.75zM9.048 21v.75zM11.41 5.505l-.53-.53zm1.831 12.34a.75.75 0 0 0 1.06-1.061zM7.216 9.697a.75.75 0 1 0-1.06 1.061zm10.749 2.362l-5.905 5.905l1.06 1.06l5.905-5.904zm-11.93-.12l5.905-5.905l-1.06-1.06l-5.905 5.904zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083zm1.06 7.086c.82-.82 1.49-1.488 1.945-2.084c.468-.614.78-1.24.78-1.99h-1.5c0 .29-.106.6-.473 1.08c-.38.498-.962 1.083-1.812 1.933zm0-8.146c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945zm2.362 10.749L7.216 9.698l-1.06 1.061l7.085 7.085z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21h12"></svg:path></svg:g>`,
})
export class SolarEraserLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserOutlineIcon],svg[solar-eraser-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.083 19.063c-.444.444-.843.843-1.21 1.187H21a.75.75 0 0 1 0 1.5H9q-.028 0-.055-.002c-.703-.027-1.3-.331-1.886-.778c-.588-.448-1.244-1.104-2.046-1.907l-.076-.076c-.803-.802-1.459-1.458-1.907-2.046c-.468-.614-.78-1.24-.78-1.989c0-.748.312-1.375.78-1.989c.448-.587 1.104-1.243 1.907-2.046l5.98-5.98c.803-.803 1.459-1.459 2.046-1.907c.614-.468 1.24-.78 1.99-.78c.748 0 1.374.312 1.988.78c.588.448 1.244 1.104 2.046 1.907l.076.076c.803.802 1.459 1.458 1.907 2.046c.468.614.78 1.24.78 1.989c0 .748-.312 1.375-.78 1.989c-.448.587-1.104 1.243-1.907 2.046zM11.94 6.035c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473c.288 0 .598.106 1.079.473c.497.38 1.083.962 1.933 1.812s1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08c0 .289-.106.599-.473 1.079c-.38.498-.962 1.083-1.812 1.933l-4.194 4.193l-6.024-6.024zM9.048 20.25c.289 0 .599-.106 1.079-.473c.498-.38 1.083-.962 1.933-1.812l.65-.651l-6.024-6.025l-.65.65c-.85.85-1.434 1.436-1.813 1.934c-.367.48-.473.79-.473 1.08c0 .288.106.598.473 1.079c.38.497.962 1.083 1.812 1.933s1.436 1.433 1.933 1.813c.481.366.79.472 1.08.472" clip-rule="evenodd"></svg:path>`,
})
export class SolarEraserOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareBoldIcon],svg[solar-eraser-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m5.524 6.825l4.723 4.723l2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362s-.557-1.249-1.67-2.362S14.66 6 13.968 6s-1.248.557-2.362 1.67zm3.406 6.041l.257-.257l-4.724-4.724l-.257.257C6.557 12.72 6 13.276 6 13.968s.557 1.249 1.67 2.362S9.34 18 10.032 18s1.248-.557 2.362-1.67" clip-rule="evenodd"></svg:path>`,
})
export class SolarEraserSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareBoldDuotoneIcon],svg[solar-eraser-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.988 10.289l4.723 4.723l2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362s-.557-1.249-1.67-2.362S14.66 6 13.968 6s-1.248.557-2.362 1.67zm3.406 6.041l.257-.257l-4.724-4.724l-.257.257C6.557 12.72 6 13.276 6 13.968s.557 1.249 1.67 2.362S9.34 18 10.032 18s1.248-.557 2.362-1.67"></svg:path>`,
})
export class SolarEraserSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareBrokenIcon],svg[solar-eraser-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarEraserSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareLineDuotoneIcon],svg[solar-eraser-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarEraserSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareLinearIcon],svg[solar-eraser-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarEraserSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareOutlineIcon],svg[solar-eraser-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.888 16.896c-.526.526-.973.974-1.378 1.283c-.432.329-.902.571-1.478.571s-1.046-.242-1.478-.571c-.405-.31-.852-.757-1.379-1.283l-.07-.071c-.527-.527-.975-.974-1.284-1.38c-.329-.43-.571-.901-.571-1.477s.242-1.046.571-1.478c.31-.405.757-.852 1.283-1.378l4.008-4.008c.526-.526.973-.974 1.378-1.283c.432-.329.902-.571 1.478-.571s1.046.242 1.478.571c.405.31.852.757 1.379 1.283l.07.071c.527.527.975.974 1.284 1.38c.329.43.571.901.571 1.477s-.242 1.046-.571 1.478c-.31.405-.757.852-1.283 1.378zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264s.27.036.568.264c.315.24.692.615 1.264 1.186c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568s-.036.27-.264.568c-.24.315-.615.692-1.186 1.263l-2.62 2.619l-3.662-3.663zm-3.68 3.68l3.663 3.663l-.257.257c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264s-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568s.036-.27.264-.568c.24-.315.615-.692 1.186-1.263z"></svg:path><svg:path d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"></svg:path></svg:g>`,
})
export class SolarEraserSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroBoldIcon],svg[solar-euro-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M6.75 12q0-.383.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298a.75.75 0 1 0 .75-1.299a6.753 6.753 0 0 0-9.74 3.597H5a.75.75 0 0 0 0 1.5h.291a6.8 6.8 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596a.75.75 0 1 0-.751-1.298a5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5 5 0 0 1 6.75 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarEuroBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroBoldDuotoneIcon],svg[solar-euro-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.75 12q0-.383.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298a.75.75 0 1 0 .75-1.299a6.753 6.753 0 0 0-9.74 3.597H5a.75.75 0 0 0 0 1.5h.291a6.8 6.8 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596a.75.75 0 1 0-.751-1.298a5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5 5 0 0 1 6.75 12"></svg:path>`,
})
export class SolarEuroBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroBrokenIcon],svg[solar-euro-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarEuroBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroLineDuotoneIcon],svg[solar-euro-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"></svg:path></svg:g>`,
})
export class SolarEuroLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroLinearIcon],svg[solar-euro-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"></svg:path></svg:g>`,
})
export class SolarEuroLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroOutlineIcon],svg[solar-euro-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m5.553-.75a5.3 5.3 0 0 0 0 1.5H10a.75.75 0 0 1 0 1.5H7.255a5.25 5.25 0 0 0 7.37 2.298a.75.75 0 1 1 .75 1.299a6.753 6.753 0 0 1-9.741-3.596H5a.75.75 0 0 1 0-1.501h.291a6.8 6.8 0 0 1 0-1.5H5a.75.75 0 0 1 0-1.5h.634a6.753 6.753 0 0 1 9.742-3.597a.75.75 0 1 1-.751 1.299a5.25 5.25 0 0 0-7.37 2.298H10a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarEuroOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitBoldIcon],svg[solar-exit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505c.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689c-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062M12 10.169c.414 0 .75.351.75.784v2.094c0 .433-.336.784-.75.784s-.75-.351-.75-.784v-2.094c0-.433.336-.784.75-.784" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.547 4.5c-2.058.003-3.131.048-3.815.732C3 5.964 3 7.142 3 9.5v5c0 2.357 0 3.535.732 4.268c.684.683 1.757.729 3.815.732c-.047-.624-.047-1.344-.047-2.123V6.623c0-.78 0-1.5.047-2.123"></svg:path>`,
})
export class SolarExitBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitBoldDuotoneIcon],svg[solar-exit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.052 4.5C9 5.078 9 5.804 9 6.722v10.556c0 .918 0 1.644.052 2.222H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268S5.643 4.5 8 4.5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505c.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689c-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062m3.043 8.545c0-.434-.336-.785-.75-.785s-.75.351-.75.784v2.094c0 .433.336.784.75.784s.75-.351.75-.784z" clip-rule="evenodd"></svg:path>`,
})
export class SolarExitBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitBrokenIcon],svg[solar-exit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 4.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v.5m6 9.5H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14M13.658 2.347c-2.162-.377-3.243-.565-3.95.062S9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505c.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689c-.476-.587-1.168-.875-2.29-1.126M12 11v2"></svg:path>`,
})
export class SolarExitBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitLineDuotoneIcon],svg[solar-exit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 4.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h1" opacity=".5"></svg:path><svg:path d="M9 6.476c0-2.293 0-3.44.707-4.067s1.788-.439 3.95-.062l2.33.407c2.394.417 3.591.626 4.302 1.504c.711.879.711 2.149.711 4.69v6.105c0 2.54 0 3.81-.71 4.689c-.712.878-1.91 1.087-4.304 1.505l-2.328.406c-2.162.377-3.243.565-3.95-.062S9 19.817 9 17.524z"></svg:path><svg:path stroke-linecap="round" d="M12 11v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarExitLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitLinearIcon],svg[solar-exit-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 4.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h1M9 6.476c0-2.293 0-3.44.707-4.067s1.788-.439 3.95-.062l2.33.407c2.394.417 3.591.626 4.302 1.504c.711.879.711 2.149.711 4.69v6.105c0 2.54 0 3.81-.71 4.689c-.712.878-1.91 1.087-4.304 1.505l-2.328.406c-2.162.377-3.243.565-3.95-.062S9 19.817 9 17.524z"></svg:path><svg:path stroke-linecap="round" d="M12 11v2"></svg:path></svg:g>`,
})
export class SolarExitLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitOutlineIcon],svg[solar-exit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m13.725 2.027l2.434.406c1.155.192 2.092.348 2.824.566c.763.228 1.393.546 1.878 1.118s.696 1.247.794 2.037c.095.758.095 1.708.095 2.88v5.933c0 1.171 0 2.12-.095 2.879c-.098.79-.309 1.464-.794 2.037c-.485.572-1.115.89-1.878 1.117c-.732.219-1.669.375-2.824.567l-2.434.406c-1.033.172-1.888.315-2.57.331c-.716.017-1.379-.098-1.933-.567c-.467-.395-.698-.91-.82-1.487h-.456c-1.132 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79c.103-.763.325-1.425.854-1.954s1.19-.751 1.955-.854c.73-.098 1.656-.098 2.79-.098h.456c.12-.577.352-1.092.82-1.487c.553-.47 1.216-.584 1.932-.567c.682.016 1.537.159 2.57.331M8.25 17.335c0 .516 0 .988.011 1.415H8c-1.2 0-2.024-.002-2.643-.085c-.598-.08-.89-.224-1.094-.428s-.348-.496-.428-1.094c-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643c.08-.598.224-.89.428-1.094s.496-.348 1.094-.428C5.976 5.252 6.8 5.25 8 5.25h.261c-.011.427-.011.899-.011 1.415zm2.869-14.14c-.543-.013-.773.082-.927.212s-.285.342-.361.88c-.08.557-.081 1.316-.081 2.435v10.556c0 1.119.002 1.878.081 2.436c.076.537.207.749.361.879s.384.224.927.211c.563-.013 1.312-.136 2.415-.32l2.33-.388c1.215-.203 2.059-.345 2.691-.533c.612-.182.936-.384 1.162-.65c.226-.267.37-.619.45-1.253c.082-.654.083-1.51.083-2.743V9.083c0-1.233-.001-2.089-.083-2.743c-.08-.634-.225-.987-.45-1.253c-.226-.266-.55-.468-1.162-.65c-.632-.188-1.476-.33-2.692-.533l-2.329-.388c-1.103-.184-1.852-.307-2.415-.32" clip-rule="evenodd"></svg:path>`,
})
export class SolarExitOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitBoldIcon],svg[solar-explicit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M8.25 8c0-.966.784-1.75 1.75-1.75h5a.75.75 0 0 1 0 1.5h-5a.25.25 0 0 0-.25.25v3.25H15a.75.75 0 0 1 0 1.5H9.75V16c0 .138.112.25.25.25h5a.75.75 0 0 1 0 1.5h-5A1.75 1.75 0 0 1 8.25 16z" clip-rule="evenodd"></svg:path>`,
})
export class SolarExplicitBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitBoldDuotoneIcon],svg[solar-explicit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 8c0-.966.784-1.75 1.75-1.75h5a.75.75 0 0 1 0 1.5h-5a.25.25 0 0 0-.25.25v3.25H15a.75.75 0 0 1 0 1.5H9.75V16c0 .138.112.25.25.25h5a.75.75 0 0 1 0 1.5h-5A1.75 1.75 0 0 1 8.25 16z"></svg:path>`,
})
export class SolarExplicitBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitBrokenIcon],svg[solar-explicit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 7h-5a1 1 0 0 0-1 1v4m6 5h-5a1 1 0 0 1-1-1v-4m0 0h6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarExplicitBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitLineDuotoneIcon],svg[solar-explicit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 7h-5a1 1 0 0 0-1 1v4m6 5h-5a1 1 0 0 1-1-1v-4m0 0h6"></svg:path></svg:g>`,
})
export class SolarExplicitLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitLinearIcon],svg[solar-explicit-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M15 7h-5a1 1 0 0 0-1 1v4m6 5h-5a1 1 0 0 1-1-1v-4m0 0h6"></svg:path></svg:g>`,
})
export class SolarExplicitLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitOutlineIcon],svg[solar-explicit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.25A1.75 1.75 0 0 0 8.25 8v8c0 .966.784 1.75 1.75 1.75h5a.75.75 0 0 0 0-1.5h-5a.25.25 0 0 1-.25-.25v-3.25H15a.75.75 0 0 0 0-1.5H9.75V8a.25.25 0 0 1 .25-.25h5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarExplicitOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportBoldIcon],svg[solar-export-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.845 7.905a.75.75 0 0 0 1.06 0l1.72-1.72v8.19a.75.75 0 0 0 1.5 0v-8.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.375 20.375a8 8 0 0 0 8-8h-3.75c-.943 0-1.414 0-1.707.293s-.293.764-.293 1.707a2.25 2.25 0 0 1-4.5 0c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293h-3.75a8 8 0 0 0 8 8"></svg:path>`,
})
export class SolarExportBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportBoldDuotoneIcon],svg[solar-export-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 0 16 0z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 7.53a.75.75 0 0 1-1.06 0l-1.72-1.72V14a.75.75 0 0 1-1.5 0V5.81L9.53 7.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarExportBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportBrokenIcon],svg[solar-export-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"></svg:path><svg:path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7"></svg:path></svg:g>`,
})
export class SolarExportBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportLineDuotoneIcon],svg[solar-export-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7"></svg:path></svg:g>`,
})
export class SolarExportLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportLinearIcon],svg[solar-export-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0"></svg:path><svg:path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7"></svg:path></svg:g>`,
})
export class SolarExportLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportOutlineIcon],svg[solar-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.47 7.53a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V14a.75.75 0 0 0 1.5 0V5.81z"></svg:path><svg:path fill="currentColor" d="M20.75 12a.75.75 0 0 0-1.5 0a7.25 7.25 0 1 1-14.5 0a.75.75 0 0 0-1.5 0a8.75 8.75 0 1 0 17.5 0"></svg:path>`,
})
export class SolarExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleBoldIcon],svg[solar-expressionless-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-3.75-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarExpressionlessCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleBoldDuotoneIcon],svg[solar-expressionless-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarExpressionlessCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleBrokenIcon],svg[solar-expressionless-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarExpressionlessCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleLineDuotoneIcon],svg[solar-expressionless-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarExpressionlessCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleLinearIcon],svg[solar-expressionless-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarExpressionlessCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleOutlineIcon],svg[solar-expressionless-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path>`,
})
export class SolarExpressionlessCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareBoldIcon],svg[solar-expressionless-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-3-5.25a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5zm1-6.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarExpressionlessSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareBoldDuotoneIcon],svg[solar-expressionless-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 16.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5zM15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarExpressionlessSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareBrokenIcon],svg[solar-expressionless-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarExpressionlessSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareLineDuotoneIcon],svg[solar-expressionless-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarExpressionlessSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareLinearIcon],svg[solar-expressionless-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarExpressionlessSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareOutlineIcon],svg[solar-expressionless-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarExpressionlessSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeBoldIcon],svg[solar-eye-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeBoldDuotoneIcon],svg[solar-eye-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeBrokenIcon],svg[solar-eye-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 4.46A9.8 9.8 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.5 14.5 0 0 1 5 6.821"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarEyeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedBoldIcon],svg[solar-eye-closed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeClosedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedBoldDuotoneIcon],svg[solar-eye-closed-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.919 6.605a1 1 0 0 0-1.838.79l.002.003l.003.007l.01.021l.032.072q.04.09.12.25c.105.21.262.506.47.857c.41.687 1.027 1.6 1.872 2.52l-.797.797a1 1 0 1 0 1.414 1.414l.84-.84c.565.455 1.197.885 1.897 1.256l-.782 1.202a1 1 0 0 0 1.676 1.091l.985-1.514c.677.208 1.402.355 2.177.425V16.5a1 1 0 0 0 1 1V13c-2.748 0-4.819-1.199-6.304-2.59l-.024-.022a12 12 0 0 1-.564-.569a13.4 13.4 0 0 1-1.67-2.237a12 12 0 0 1-.516-.968zm-1.838.79L2 7c-.92.394-.919.395-.919.395" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.22 12.398A8.7 8.7 0 0 1 12 13v4.5a1 1 0 0 0 1-1v-1.544c.772-.07 1.497-.217 2.176-.425l.986 1.515a1 1 0 0 0 1.676-1.091l-.782-1.203c.701-.37 1.332-.8 1.897-1.256l.84.84a1 1 0 1 0 1.414-1.414l-.797-.798a15.4 15.4 0 0 0 2.302-3.296a10 10 0 0 0 .19-.395l.011-.026l.004-.008l.002-.005a1 1 0 1 0-1.838-.788l-.005.011a5 5 0 0 1-.146.302a13 13 0 0 1-2.614 3.48c-.841.79-1.87 1.517-3.095 2" opacity=".5"></svg:path>`,
})
export class SolarEyeClosedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedBrokenIcon],svg[solar-eye-closed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624l-.274-.698zm-6.546.409a.75.75 0 1 0-1.257-.818zm-2.67 1.353a.75.75 0 1 0 1.258.818zM22.69 7.295a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm.97 2.03a.75.75 0 1 0 1.06-1.06zm-8.72 3.34a.75.75 0 0 0 1.5 0zm5.121-.591a.75.75 0 1 0 1.258-.818zm-10.84-4.25A.75.75 0 0 0 4.47 10.6zm-2.561.44a.75.75 0 0 0 1.06 1.06zM12 13.25c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28a12 12 0 0 1-.507-.946l-.022-.049l-.004-.01l-.001-.001L2 7l-.69.296h.001l.001.003l.003.006l.04.088q.039.088.117.243c.103.206.256.496.462.841c.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zm-7.529.29l-1.413 2.17l1.258.818l1.412-2.171zM22 7l-.69-.296h.001v.002l-.007.013l-.028.062a12 12 0 0 1-.64 1.162a13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085l.01-.024l.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351zm-.017 1.077l1.5 1.5l1.06-1.06l-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262l1.412 2.171l1.258-.818l-1.413-2.171zm-10.49-3.14l-1.5 1.5L4.03 13.16l1.5-1.5z"></svg:path>`,
})
export class SolarEyeClosedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedLineDuotoneIcon],svg[solar-eye-closed-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624l-.274-.698zm7.102-6.034a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm-7 2.121c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28a12 12 0 0 1-.507-.946l-.022-.049l-.004-.01l-.001-.001L2 7l-.69.296h.001l.001.003l.003.006l.04.088q.039.088.117.243c.103.206.256.496.462.841c.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zM22 7l-.69-.296h.001v.002l-.007.013l-.028.062a12 12 0 0 1-.64 1.162a13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085l.01-.024l.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351z"></svg:path><svg:path fill="currentColor" d="M12.75 14a.75.75 0 0 0-1.5 0zm3.466-1.08a.75.75 0 1 0-1.257.818zm-7.175.818a.75.75 0 0 0-1.257-.818zm-2.67 1.353a.75.75 0 0 0 1.258.818zm13.16-4.492a.75.75 0 1 0-1.061 1.06zm.439 2.56a.75.75 0 1 0 1.06-1.06zM11.25 16.5a.75.75 0 0 0 1.5 0zm5.121-.59a.75.75 0 1 0 1.258-.819zm-10.84-4.25a.75.75 0 1 0-1.061-1.061zm-2.561.439a.75.75 0 1 0 1.06 1.06zm4.814.82l-1.413 2.172l1.258.818l1.412-2.171zm10.686-1.26l1.5 1.5l1.06-1.06l-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262l1.412 2.171l1.258-.818l-1.413-2.171zm-10.49-3.14l-1.5 1.5L4.03 13.16l1.5-1.5z" opacity=".5"></svg:path>`,
})
export class SolarEyeClosedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedLinearIcon],svg[solar-eye-closed-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624l-.274-.698zm-6.546.409a.75.75 0 1 0-1.257-.818zm-2.67 1.353a.75.75 0 1 0 1.258.818zM22.69 7.295a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm.97 2.03a.75.75 0 1 0 1.06-1.06zm-8.72 3.34a.75.75 0 0 0 1.5 0zm5.121-.591a.75.75 0 1 0 1.258-.818zm-10.84-4.25A.75.75 0 0 0 4.47 10.6zm-2.561.44a.75.75 0 0 0 1.06 1.06zM12 13.25c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28a12 12 0 0 1-.507-.946l-.022-.049l-.004-.01l-.001-.001L2 7l-.69.296h.001l.001.003l.003.006l.04.088q.039.088.117.243c.103.206.256.496.462.841c.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zm-7.529.29l-1.413 2.17l1.258.818l1.412-2.171zM22 7l-.69-.296h.001v.002l-.007.013l-.028.062a12 12 0 0 1-.64 1.162a13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085l.01-.024l.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351zm-.017 1.077l1.5 1.5l1.06-1.06l-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262l1.412 2.171l1.258-.818l-1.413-2.171zm-10.49-3.14l-1.5 1.5L4.03 13.16l1.5-1.5z"></svg:path>`,
})
export class SolarEyeClosedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedOutlineIcon],svg[solar-eye-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.295 6.31a.75.75 0 0 1 .394.986L22 7l.69.296v.001l-.002.003l-.003.007l-.01.024l-.039.084a14 14 0 0 1-.727 1.321a15 15 0 0 1-1.846 2.394l.968.969a.75.75 0 0 1-1.06 1.06l-1.001-1a11.6 11.6 0 0 1-2.274 1.497l.934 1.435a.75.75 0 1 1-1.258.818l-1.089-1.674c-.78.255-1.623.428-2.532.49V16.5a.75.75 0 0 1-1.5 0v-1.775a10.5 10.5 0 0 1-2.46-.466l-1.074 1.65a.75.75 0 1 1-1.258-.818l.913-1.402a11.5 11.5 0 0 1-2.293-1.49l-.96.96a.75.75 0 0 1-1.061-1.06l.924-.924A15 15 0 0 1 1.514 7.72a10 10 0 0 1-.188-.388l-.01-.025l-.004-.007v-.003H1.31L2 7l-.69.296a.75.75 0 0 1 1.379-.592v.002l.007.014l.029.063q.04.086.125.255a13.3 13.3 0 0 0 2.706 3.584c.866.805 1.927 1.546 3.196 2.034A9 9 0 0 0 12 13.25a9 9 0 0 0 3.312-.619c1.262-.497 2.316-1.243 3.175-2.049a13.3 13.3 0 0 0 2.789-3.8l.028-.063l.006-.013v-.001m.985-.394a.75.75 0 0 0-.984.394zM2.69 6.704" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeClosedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeLineDuotoneIcon],svg[solar-eye-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z" opacity=".5"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarEyeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeLinearIcon],svg[solar-eye-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarEyeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeOutlineIcon],svg[solar-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152s.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75s7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152s-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75s6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25s-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292"></svg:path></svg:g>`,
})
export class SolarEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanBoldIcon],svg[solar-eye-scan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.487.487.7.865.817 1.538c.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922c-.175-1.005-.549-1.656-1.233-2.34c-.749-.75-1.698-1.081-2.87-1.239c-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5M2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76c.118.673.33 1.051.817 1.538c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.684-.685-1.058-1.336-1.233-2.341c-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922c-.175 1.005-.549 1.656-1.233 2.34c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.487-.487.7-.865.817-1.538c.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75m-12.056-13H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.487.487-.7.865-.817 1.538c-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922c.175-1.005.549-1.656 1.233-2.34c.749-.75 1.698-1.081 2.87-1.239c1.14-.153 2.595-.153 4.433-.153M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94M9.25 12a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeScanBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanBoldDuotoneIcon],svg[solar-eye-scan-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.487.487.7.865.817 1.538c.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922c-.175-1.005-.549-1.656-1.233-2.34c-.749-.75-1.698-1.081-2.87-1.239c-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5M2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76c.118.673.33 1.051.817 1.538c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.684-.685-1.058-1.336-1.233-2.341c-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922c-.175 1.005-.549 1.656-1.233 2.34c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.487-.487.7-.865.817-1.538c.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75m-12.056-13H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.487.487-.7.865-.817 1.538c-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922c.175-1.005.549-1.656 1.233-2.34c.749-.75 1.698-1.081 2.87-1.239c1.14-.153 2.595-.153 4.433-.153" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94M9.25 12a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeScanBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanBrokenIcon],svg[solar-eye-scan-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 15c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9m10-2C9.073 7 7.08 8.562 5.892 9.94C5.297 10.63 5 10.975 5 12s.297 1.37.892 2.06C7.08 15.438 9.072 17 12 17s4.92-1.562 6.108-2.94c.595-.69.892-1.035.892-2.06s-.297-1.37-.892-2.06A9 9 0 0 0 16 8.125"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828c.653.654 1.528.943 2.828 1.07M14 2h1m7 7c0-3.771 0-4.657-1.172-5.828c-.653-.654-1.528-.943-2.828-1.07"></svg:path></svg:g>`,
})
export class SolarEyeScanBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanLineDuotoneIcon],svg[solar-eye-scan-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 18.771 2 15m20 0c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22m0-20c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9" opacity=".5"></svg:path><svg:path d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94Z"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class SolarEyeScanLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanLinearIcon],svg[solar-eye-scan-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 18.771 2 15m20 0c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22m0-20c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9"></svg:path><svg:path d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94Z"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class SolarEyeScanLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanOutlineIcon],svg[solar-eye-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.29 2.89c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.684.685 1.058 1.336 1.233 2.341c.158.904.158 2.122.158 3.922V9a.75.75 0 0 1-1.5 0c0-1.92-.003-3.001-.135-3.76c-.118-.673-.33-1.051-.817-1.538c-.423-.423-1.003-.677-2.009-.812M2.75 15a.75.75 0 0 0-1.5 0v.096c0 1.8 0 3.018.158 3.922c.175 1.005.549 1.656 1.233 2.34c.749.75 1.698 1.081 2.87 1.239c1.14.153 2.595.153 4.433.153H10a.75.75 0 0 0 0-1.5c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812c-.487-.487-.7-.865-.817-1.538c-.132-.759-.135-1.84-.135-3.76m20 0a.75.75 0 0 0-1.5 0c0 1.92-.003 3.001-.135 3.76c-.118.673-.33 1.051-.817 1.538c-.423.423-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14a.75.75 0 0 0 0 1.5h.056c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.684-.685 1.058-1.336 1.233-2.341c.158-.904.158-2.123.158-3.922zM10 1.25h-.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.684.685-1.058 1.336-1.233 2.341c-.158.904-.158 2.122-.158 3.922V9a.75.75 0 1 0 1.5 0c0-1.92.003-3.001.135-3.76c.118-.673.33-1.051.817-1.538c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14a.75.75 0 0 0 0-1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 9.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M10.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.324 9.45c1.27-1.473 3.452-3.2 6.676-3.2s5.406 1.727 6.676 3.2l.032.038c.27.314.55.637.741 1.024c.214.433.301.897.301 1.488c0 .59-.087 1.055-.3 1.488c-.192.387-.471.71-.742 1.024l-.032.037c-1.27 1.474-3.452 3.201-6.676 3.201s-5.406-1.727-6.676-3.2l-.032-.038c-.27-.314-.55-.637-.741-1.024c-.214-.433-.301-.897-.301-1.488c0-.59.087-1.055.3-1.488c.192-.387.471-.71.742-1.024zM12 7.75c-2.631 0-4.434 1.397-5.54 2.68c-.313.364-.466.549-.565.747c-.083.169-.145.389-.145.823s.062.654.145.823c.099.198.252.383.565.747c1.106 1.283 2.909 2.68 5.54 2.68s4.434-1.397 5.54-2.68c.314-.364.466-.549.565-.747c.083-.169.145-.389.145-.823s-.062-.654-.145-.823c-.099-.198-.252-.383-.566-.747C16.435 9.147 14.632 7.75 12 7.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeScanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleBoldIcon],svg[solar-face-scan-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.801 2.57a.71.71 0 0 1-.555.838a8.78 8.78 0 0 0-6.838 6.838a.71.71 0 1 1-1.394-.283a10.2 10.2 0 0 1 7.949-7.949a.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555a8.78 8.78 0 0 0 6.838 6.838a.71.71 0 1 1-.283 1.394a10.2 10.2 0 0 1-7.948-7.949a.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556a10.2 10.2 0 0 1 7.949 7.949a.711.711 0 0 1-1.394.283a8.78 8.78 0 0 0-6.838-6.838a.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838a10.2 10.2 0 0 1-7.949 7.949a.711.711 0 0 1-.283-1.394a8.78 8.78 0 0 0 6.838-6.838a.71.71 0 0 1 .838-.555"></svg:path><svg:path d="M12 19.583a7.583 7.583 0 1 0 0-15.166a7.583 7.583 0 0 0 0 15.166m-3.06-5.044a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69a.71.71 0 1 1 .846 1.142a4.87 4.87 0 0 1-2.911.97a4.87 4.87 0 0 1-2.911-.97a.71.71 0 0 1-.148-.994m6.377-4.139c0 .688-.37 1.245-.829 1.245s-.83-.557-.83-1.245c0-.687.372-1.244.83-1.244s.83.557.83 1.244m-5.805 1.245c.458 0 .83-.557.83-1.245c0-.687-.372-1.244-.83-1.244s-.83.557-.83 1.244c0 .688.372 1.245.83 1.245"></svg:path></svg:g>`,
})
export class SolarFaceScanCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleBoldDuotoneIcon],svg[solar-face-scan-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.801 2.57a.71.71 0 0 1-.555.838a8.78 8.78 0 0 0-6.838 6.838a.71.71 0 1 1-1.394-.283a10.2 10.2 0 0 1 7.949-7.949a.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555a8.78 8.78 0 0 0 6.838 6.838a.71.71 0 1 1-.283 1.394a10.2 10.2 0 0 1-7.948-7.949a.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556a10.2 10.2 0 0 1 7.949 7.949a.711.711 0 0 1-1.394.283a8.78 8.78 0 0 0-6.838-6.838a.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838a10.2 10.2 0 0 1-7.949 7.949a.711.711 0 0 1-.283-1.394a8.78 8.78 0 0 0 6.838-6.838a.71.71 0 0 1 .838-.555" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 19.583a7.583 7.583 0 1 0 0-15.166a7.583 7.583 0 0 0 0 15.166" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.94 14.539a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69a.71.71 0 1 1 .847 1.142a4.87 4.87 0 0 1-2.912.97a4.87 4.87 0 0 1-2.911-.97a.71.71 0 0 1-.148-.994m5.547-2.895c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244s-.83.557-.83 1.244s.372 1.244.83 1.244m-4.976 0c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244s-.83.557-.83 1.244s.372 1.244.83 1.244"></svg:path>`,
})
export class SolarFaceScanCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleBrokenIcon],svg[solar-face-scan-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.2 10A10.01 10.01 0 0 1 10 2.2M2.2 14a10.01 10.01 0 0 0 7.8 7.8M21.8 10A10.01 10.01 0 0 0 14 2.2M21.8 14a10.01 10.01 0 0 1-7.8 7.8"></svg:path></svg:g>`,
})
export class SolarFaceScanCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleLineDuotoneIcon],svg[solar-face-scan-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.2 10A10.01 10.01 0 0 1 10 2.2M2.2 14a10.01 10.01 0 0 0 7.8 7.8M21.8 10A10.01 10.01 0 0 0 14 2.2M21.8 14a10.01 10.01 0 0 1-7.8 7.8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFaceScanCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleLinearIcon],svg[solar-face-scan-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.2 10A10.01 10.01 0 0 1 10 2.2M2.2 14a10.01 10.01 0 0 0 7.8 7.8M21.8 10A10.01 10.01 0 0 0 14 2.2M21.8 14a10.01 10.01 0 0 1-7.8 7.8"></svg:path></svg:g>`,
})
export class SolarFaceScanCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleOutlineIcon],svg[solar-face-scan-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.5c0 .829-.448 1.5-1 1.5c-.553 0-1-.671-1-1.5c0-.828.447-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .829-.448 1.5-1 1.5s-1-.671-1-1.5C8 9.672 8.448 9 9 9s1 .672 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.265 2.051a.75.75 0 0 1 .884-.586a10.76 10.76 0 0 1 8.386 8.386a.75.75 0 0 1-1.47.298a9.26 9.26 0 0 0-7.214-7.214a.75.75 0 0 1-.586-.884m-2.53 0a.75.75 0 0 1-.586.884a9.26 9.26 0 0 0-7.214 7.215a.75.75 0 0 1-1.47-.299A10.76 10.76 0 0 1 9.85 1.465a.75.75 0 0 1 .884.586M2.051 13.265a.75.75 0 0 1 .884.586a9.26 9.26 0 0 0 7.214 7.214a.75.75 0 1 1-.298 1.47a10.76 10.76 0 0 1-8.386-8.385a.75.75 0 0 1 .586-.885m19.898 0a.75.75 0 0 1 .586.885a10.76 10.76 0 0 1-8.386 8.385a.75.75 0 0 1-.298-1.47a9.26 9.26 0 0 0 7.214-7.214a.75.75 0 0 1 .884-.586M8.397 15.554a.75.75 0 0 1 1.05-.156c.728.54 1.607.852 2.553.852s1.825-.312 2.553-.852a.75.75 0 1 1 .893 1.205A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.147a.75.75 0 0 1-.156-1.05" clip-rule="evenodd"></svg:path>`,
})
export class SolarFaceScanCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareBoldIcon],svg[solar-face-scan-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21.302 13.163c.386 0 .698.312.698.697v.053c0 1.71 0 3.064-.142 4.123c-.147 1.09-.456 1.974-1.152 2.67s-1.58 1.005-2.67 1.152c-1.06.142-2.414.142-4.123.142h-.053a.698.698 0 0 1 0-1.395c1.774 0 3.034-.002 3.99-.13c.936-.126 1.476-.362 1.87-.756c.393-.393.629-.933.755-1.869c.128-.956.13-2.216.13-3.99c0-.385.312-.697.697-.697m-18.604 0c.385 0 .697.312.697.697c0 1.774.002 3.034.13 3.99c.126.936.362 1.476.756 1.87c.394.393.933.629 1.869.755c.956.128 2.216.13 3.99.13a.698.698 0 1 1 0 1.395h-.053c-1.71 0-3.064 0-4.123-.142c-1.09-.147-1.974-.456-2.67-1.152s-1.005-1.58-1.152-2.67C2 16.976 2 15.622 2 13.913v-.053c0-.385.312-.697.698-.697M10.087 2h.053a.698.698 0 1 1 0 1.395c-1.774 0-3.034.002-3.99.13c-.936.126-1.475.362-1.87.756c-.393.394-.629.933-.755 1.869c-.128.956-.13 2.216-.13 3.99a.698.698 0 0 1-1.395 0v-.053c0-1.71 0-3.064.142-4.123c.147-1.09.456-1.974 1.152-2.67s1.58-1.005 2.67-1.152C7.024 2 8.378 2 10.087 2m7.763 1.525c-.956-.128-2.216-.13-3.99-.13a.698.698 0 0 1 0-1.395h.053c1.71 0 3.064 0 4.123.142c1.09.147 1.974.456 2.67 1.152s1.005 1.58 1.152 2.67C22 7.024 22 8.378 22 10.087v.053a.698.698 0 1 1-1.395 0c0-1.774-.002-3.034-.13-3.99c-.126-.936-.362-1.475-.756-1.87c-.393-.393-.933-.629-1.869-.755"></svg:path><svg:path d="M5.376 5.376c-.818.817-.818 2.132-.818 4.764v3.72c0 2.632 0 3.947.818 4.765c.817.817 2.132.817 4.764.817h3.72c2.632 0 3.947 0 4.765-.817c.817-.818.817-2.133.817-4.764v-3.722c0-2.63 0-3.946-.817-4.763c-.818-.818-2.133-.818-4.764-.818h-3.722c-2.63 0-3.946 0-4.763.818m3.692 9.168a.61.61 0 0 1 .854-.128c.592.44 1.308.694 2.078.694s1.486-.254 2.078-.694a.61.61 0 0 1 .727.981a4.7 4.7 0 0 1-2.805.934a4.7 4.7 0 0 1-2.805-.934a.61.61 0 0 1-.127-.854m6.188-4.114c0 .675-.365 1.221-.814 1.221c-.45 0-.814-.546-.814-1.22c0-.675.364-1.222.814-1.222s.814.547.814 1.221M9.558 11.65c.45 0 .814-.546.814-1.22c0-.675-.364-1.222-.814-1.222s-.814.547-.814 1.221c0 .675.365 1.221.814 1.221"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareBoldDuotoneIcon],svg[solar-face-scan-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.302 13.163c.386 0 .698.312.698.697v.053c0 1.71 0 3.064-.142 4.123c-.147 1.09-.456 1.974-1.152 2.67s-1.58 1.005-2.67 1.152c-1.06.142-2.414.142-4.123.142h-.053a.698.698 0 0 1 0-1.395c1.774 0 3.034-.002 3.99-.13c.936-.126 1.476-.362 1.87-.756c.393-.393.629-.933.755-1.869c.128-.956.13-2.216.13-3.99c0-.385.312-.697.697-.697m-18.604 0c.385 0 .697.312.697.697c0 1.774.002 3.034.13 3.99c.126.936.362 1.476.756 1.87c.394.393.933.629 1.869.755c.956.128 2.216.13 3.99.13a.698.698 0 1 1 0 1.395h-.053c-1.71 0-3.064 0-4.123-.142c-1.09-.147-1.974-.456-2.67-1.152s-1.005-1.58-1.152-2.67C2 16.976 2 15.622 2 13.913v-.053c0-.385.312-.697.698-.697M10.087 2h.053a.698.698 0 1 1 0 1.395c-1.774 0-3.034.002-3.99.13c-.936.126-1.475.362-1.87.756c-.393.394-.629.933-.755 1.869c-.128.956-.13 2.216-.13 3.99a.698.698 0 0 1-1.395 0v-.053c0-1.71 0-3.064.142-4.123c.147-1.09.456-1.974 1.152-2.67s1.58-1.005 2.67-1.152C7.024 2 8.378 2 10.087 2m7.763 1.525c-.956-.128-2.216-.13-3.99-.13a.698.698 0 0 1 0-1.395h.053c1.71 0 3.064 0 4.123.142c1.09.147 1.974.456 2.67 1.152s1.005 1.58 1.152 2.67C22 7.024 22 8.378 22 10.087v.053a.698.698 0 1 1-1.395 0c0-1.774-.002-3.034-.13-3.99c-.126-.936-.362-1.475-.756-1.87c-.393-.393-.933-.629-1.869-.755" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.373 10.43c0 .675-.364 1.222-.814 1.222s-.814-.547-.814-1.221s.365-1.221.814-1.221c.45 0 .814.547.814 1.22m4.884 0c0 .675-.365 1.222-.814 1.222c-.45 0-.814-.547-.814-1.221s.364-1.221.814-1.221s.814.547.814 1.22m-5.334 3.987a.61.61 0 0 0-.727.981a4.7 4.7 0 0 0 2.805.934a4.7 4.7 0 0 0 2.805-.934a.61.61 0 1 0-.727-.98a3.47 3.47 0 0 1-2.078.693c-.77 0-1.486-.254-2.078-.694"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path d="M10.373 10.43c0 .675-.365 1.222-.814 1.222c-.45 0-.814-.547-.814-1.221c0-.675.364-1.221.814-1.221s.814.546.814 1.22m4.883 0c0 .675-.364 1.222-.814 1.222s-.814-.547-.814-1.221c0-.675.365-1.221.814-1.221c.45 0 .814.546.814 1.22m-5.334 3.987a.61.61 0 0 0-.727.98c.792.588 1.76.935 2.806.935a4.7 4.7 0 0 0 2.805-.934a.61.61 0 1 0-.727-.981a3.47 3.47 0 0 1-2.078.694c-.77 0-1.486-.255-2.079-.694"></svg:path><svg:path fill-rule="evenodd" d="M10.14 4.559h3.72c2.632 0 3.948 0 4.765.817s.817 2.133.817 4.764v3.72c0 2.632 0 3.948-.817 4.765s-2.133.817-4.764.817H10.14c-2.631 0-3.947 0-4.764-.817s-.817-2.133-.817-4.764V10.14c0-2.631 0-3.947.817-4.764s2.133-.817 4.764-.817m-1.072 9.985a.61.61 0 0 1 .854-.127c.593.44 1.308.694 2.079.694c.77 0 1.485-.255 2.078-.694a.61.61 0 1 1 .727.98a4.7 4.7 0 0 1-2.805.935a4.7 4.7 0 0 1-2.806-.934a.61.61 0 0 1-.127-.854m5.374-2.892c.45 0 .814-.547.814-1.221c0-.675-.364-1.221-.814-1.221s-.814.546-.814 1.22c0 .675.365 1.222.814 1.222m-4.883 0c.45 0 .814-.547.814-1.221c0-.675-.365-1.221-.814-1.221c-.45 0-.814.546-.814 1.22c0 .675.364 1.222.814 1.222" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareBrokenIcon],svg[solar-face-scan-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareLineDuotoneIcon],svg[solar-face-scan-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareLinearIcon],svg[solar-face-scan-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareOutlineIcon],svg[solar-face-scan-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75M8.397 15.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049" clip-rule="evenodd"></svg:path>`,
})
export class SolarFaceScanSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleBoldIcon],svg[solar-facemask-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.824 13.878l-4.112 1.645l-.38 4.938a10 10 0 0 0 4.492-6.583m-6.058 7.389l.444-5.776l-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m-9.098-.806l-.379-4.922l-4.077-1.482a10 10 0 0 0 4.456 6.404"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.998 12.193L22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81l2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192zM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarFacemaskCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleBoldDuotoneIcon],svg[solar-facemask-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.998 12.193L22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81l2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-.234 10.767l.444-5.776l-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m6.058-7.389l-4.112 1.644l-.38 4.94a10 10 0 0 0 4.492-6.584M6.668 20.461L6.29 15.54l-4.077-1.482a10 10 0 0 0 4.456 6.404"></svg:path>`,
})
export class SolarFacemaskCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleBrokenIcon],svg[solar-facemask-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 20.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarFacemaskCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleLineDuotoneIcon],svg[solar-facemask-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 20.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarFacemaskCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleLinearIcon],svg[solar-facemask-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 20.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarFacemaskCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleOutlineIcon],svg[solar-facemask-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 0 0-9.245 9.545l.05.02l4.21 1.871l2.85-1.14a5.75 5.75 0 0 1 4.27 0l2.85 1.14l4.21-1.871l.05-.02q.005-.147.005-.295A9.25 9.25 0 0 0 12 2.75m9.026 11.281l-3.319 1.476l-.368 4.048a9.26 9.26 0 0 0 3.687-5.524m-5.275 6.427l.002-.026l.45-4.943l-2.625-1.05a4.25 4.25 0 0 0-3.156 0l-2.624 1.05l.449 4.943l.002.026A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 3.751-.792m-9.09-.903l-.368-4.048l-3.32-1.476a9.26 9.26 0 0 0 3.688 5.524M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path>`,
})
export class SolarFacemaskCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareBoldIcon],svg[solar-facemask-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.996 13.81l-4.281 1.712l-.206 2.88l3.286 1.409a.8.8 0 0 1 .217.14c.834-1.262.964-3.111.984-6.142m-2.108 7.245l-2.492-1.068l-.133 1.859c1.1-.128 1.946-.363 2.625-.791m-4.137.902v-.01l.462-6.454l-2.635-1.053a4.25 4.25 0 0 0-3.156 0l-2.635 1.053l.461 6.455v.01C9.302 22 10.539 22 12 22c1.463 0 2.699 0 3.751-.044m-9.014-.111l-.133-1.86l-2.492 1.069c.679.428 1.524.663 2.625.79m-3.749-1.892a.8.8 0 0 1 .217-.141l3.286-1.409l-.206-2.88l-4.281-1.713c.02 3.03.15 4.88.984 6.143"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12v.25a.8.8 0 0 1 .279.054L7 14.192l2.864-1.146a5.75 5.75 0 0 1 4.272 0L17 14.192l4.721-1.888A.8.8 0 0 1 22 12.25V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarFacemaskSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareBoldDuotoneIcon],svg[solar-facemask-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12v.25a.8.8 0 0 1 .279.054L7 14.192l2.864-1.146a5.75 5.75 0 0 1 4.272 0L17 14.192l4.721-1.888A.8.8 0 0 1 22 12.25V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m5.996 3.31l-4.281 1.712l-.206 2.88l3.287 1.409a.8.8 0 0 1 .216.141c.834-1.262.964-3.112.984-6.142m-2.108 7.244l-2.492-1.068l-.133 1.86c1.1-.13 1.946-.364 2.625-.792m-4.137.903l.001-.01l.461-6.454l-2.635-1.054a4.25 4.25 0 0 0-3.156 0l-2.635 1.054l.461 6.454v.01C9.303 22 10.539 22 12 22c1.463 0 2.699 0 3.751-.043m-9.014-.112l-.133-1.86l-2.492 1.069c.679.428 1.524.663 2.625.791m-3.749-1.893a.8.8 0 0 1 .217-.141l3.286-1.409l-.205-2.88l-4.282-1.712c.02 3.03.15 4.88.984 6.142"></svg:path>`,
})
export class SolarFacemaskSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareBrokenIcon],svg[solar-facemask-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536c.974-.973 2.343-1.3 4.536-1.409"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 21.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5"></svg:path></svg:g>`,
})
export class SolarFacemaskSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareLineDuotoneIcon],svg[solar-facemask-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 21.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5"></svg:path></svg:g>`,
})
export class SolarFacemaskSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareLinearIcon],svg[solar-facemask-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 21.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5"></svg:path></svg:g>`,
})
export class SolarFacemaskSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareOutlineIcon],svg[solar-facemask-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.293l.055.022l4.21 1.871l2.85-1.14a5.75 5.75 0 0 1 4.27 0l2.85 1.14l4.21-1.871l.055-.022V12c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m14.632 11.008l-3.532 1.57l-.222 2.89l2.844 1.22c.371-.528.603-1.22.739-2.228c.123-.917.16-2.037.171-3.452M19 20.673l-1.63-.699l-.085 1.113l.102-.013c.659-.089 1.182-.219 1.613-.401m-3.228.532l.439-5.713l-2.632-1.053a4.25 4.25 0 0 0-3.156 0L7.79 15.492l.44 5.713c1.033.044 2.268.045 3.77.045s2.737 0 3.77-.045m-9.055-.118l-.086-1.113l-1.63.699c.432.183.955.312 1.614.4zm-3.051-1.474l2.844-1.218l-.222-2.891l-3.532-1.57c.011 1.415.048 2.535.171 3.452c.136 1.008.368 1.7.739 2.227" clip-rule="evenodd"></svg:path>`,
})
export class SolarFacemaskSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedBoldIcon],svg[solar-feed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14zm3 2c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16zm1-6.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFeedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedBoldDuotoneIcon],svg[solar-feed-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16zm1-6.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarFeedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedBrokenIcon],svg[solar-feed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.965 7c-.078-1.872-.328-3.02-1.137-3.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-3"></svg:path><svg:path d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16z"></svg:path><svg:path stroke-linecap="round" d="M7 6h5"></svg:path></svg:g>`,
})
export class SolarFeedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedLineDuotoneIcon],svg[solar-feed-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 6h5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFeedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedLinearIcon],svg[solar-feed-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16z"></svg:path><svg:path stroke-linecap="round" d="M7 6h5"></svg:path></svg:g>`,
})
export class SolarFeedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedOutlineIcon],svg[solar-feed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.95 8.25h6.1c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.854.597 1.345c.062.459.062 1.032.062 1.697v4.098c0 .665 0 1.238-.062 1.697c-.066.492-.215.963-.597 1.345s-.854.531-1.345.597c-.459.062-1.032.062-1.696.062h-6.1c-.664 0-1.237 0-1.696-.062c-.491-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-4.098c0-.665 0-1.238.062-1.697c.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062M7.455 9.798c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4c0 .728.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h6c.728 0 1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546v-4c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048H9c-.728 0-1.2.002-1.546.048" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 5.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14" clip-rule="evenodd"></svg:path>`,
})
export class SolarFeedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelBoldIcon],svg[solar-ferris-wheel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.698 3.073a1.75 1.75 0 0 0-3.396 0l-.097.052L5.41 5.739a4 4 0 0 0-.241.143a1.75 1.75 0 0 0-1.711 3.023l-.002.126v4.938q0 .301.047.593a1.75 1.75 0 1 0 2.095 2.801l1.307.713l-2.054 3.548a.75.75 0 0 0 1.298.752l2.074-3.581l1.982 1.08l.097.052a1.75 1.75 0 0 0 3.396 0l.097-.052l1.983-1.08l2.073 3.58a.75.75 0 0 0 1.298-.75l-2.054-3.549l1.307-.713a1.75 1.75 0 1 0 2.095-2.801q.047-.293.047-.593V9.03l-.002-.125a1.75 1.75 0 0 0-1.711-3.024a4 4 0 0 0-.242-.143l-4.794-2.614zm-3.061 1.524a1.747 1.747 0 0 0 2.726 0l4.452 2.428a1.75 1.75 0 0 0 1.229 2.165v4.779q0 .177-.027.349A1.75 1.75 0 0 0 17.75 16v.01l-1.407.767l-2.691-4.649a2 2 0 1 0-3.303 0l-2.692 4.65l-1.407-.767V16c0-.8-.536-1.473-1.267-1.683a2 2 0 0 1-.027-.348V9.19a1.75 1.75 0 0 0 1.229-2.165zM8.974 17.496l1.663.907a1.747 1.747 0 0 1 2.726 0l1.663-.907L12.4 12.96a2 2 0 0 1-.8 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFerrisWheelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelBoldDuotoneIcon],svg[solar-ferris-wheel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 11a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.821 12.678l-4.976 8.958a.75.75 0 0 0 1.31.728l4.883-8.787a2.76 2.76 0 0 1-1.217-.9m3.142.9l4.882 8.787a.75.75 0 0 0 1.31-.728l-4.976-8.958c-.31.403-.731.717-1.216.899M12 5.25a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5M2.75 7.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M19.5 5.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m0 8.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m-15 0a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m5.75 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.637 4.597a1.74 1.74 0 0 1-.335-1.524l-.098.052L5.41 5.739a4 4 0 0 0-.241.143c.491.204.87.624 1.016 1.143zM4.955 9.19a1.75 1.75 0 0 1-1.498-.285l-.002.126v4.938q0 .301.047.593a1.74 1.74 0 0 1 1.48-.245a2 2 0 0 1-.027-.348zm1.295 6.82a1.75 1.75 0 0 1-.653 1.353l4.607 2.512l.098.052a1.75 1.75 0 0 1 .335-1.524zm7.113 2.392a1.74 1.74 0 0 1 .335 1.524l.096-.05l4.608-2.513a1.75 1.75 0 0 1-.652-1.353zm5.653-4.084a1.75 1.75 0 0 1 1.48.243q.048-.292.048-.592V9.03q0-.062-.003-.125a1.74 1.74 0 0 1-1.497.284v4.779q0 .177-.028.349m-1.2-7.293a1.75 1.75 0 0 1 1.015-1.142a4 4 0 0 0-.242-.144l-4.794-2.614l-.097-.051a1.75 1.75 0 0 1-.335 1.524z" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarFerrisWheelBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelBrokenIcon],svg[solar-ferris-wheel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 11a2 2 0 1 1-2-2"></svg:path><svg:path d="M20.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"></svg:path><svg:path stroke-linecap="round" d="m18.5 22l-3.333-6M10.5 13l-5 9"></svg:path><svg:path d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z"></svg:path></svg:g>`,
})
export class SolarFerrisWheelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelLineDuotoneIcon],svg[solar-ferris-wheel-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="11" r="2"></svg:circle><svg:path d="M20.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"></svg:path><svg:path stroke-linecap="round" d="m13.5 13l5 9m-8-9l-5 9" opacity=".5"></svg:path><svg:path d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFerrisWheelLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelLinearIcon],svg[solar-ferris-wheel-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="11" r="2"></svg:circle><svg:path d="M20.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"></svg:path><svg:path stroke-linecap="round" d="m13.5 13l5 9m-8-9l-5 9"></svg:path><svg:path d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0l-4.795-2.614a3 3 0 0 1-1.563-2.634V9.03a3 3 0 0 1 1.563-2.634z"></svg:path></svg:g>`,
})
export class SolarFerrisWheelLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelOutlineIcon],svg[solar-ferris-wheel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.698 3.073a1.75 1.75 0 0 0-3.396 0l-.097.052L5.41 5.739a4 4 0 0 0-.242.143a1.75 1.75 0 0 0-1.711 3.024l-.002.125v4.938q0 .3.047.593a1.75 1.75 0 1 0 2.095 2.801l1.243.678l-1.997 3.595a.75.75 0 1 0 1.312.728l2.002-3.605l2.047 1.116l.097.052a1.75 1.75 0 0 0 3.396 0l.097-.052l2.047-1.116l2.002 3.605a.75.75 0 1 0 1.312-.728l-1.997-3.595l1.244-.678a1.75 1.75 0 1 0 2.095-2.801q.046-.293.046-.593V9.03l-.002-.125a1.75 1.75 0 0 0-1.711-3.024a4 4 0 0 0-.241-.143l-4.795-2.614zm-3.061 1.525a1.747 1.747 0 0 0 2.726 0l4.452 2.427a1.75 1.75 0 0 0 1.23 2.165v4.779q0 .177-.028.349A1.75 1.75 0 0 0 17.75 16v.01l-1.32.72l-2.251-4.052a2.75 2.75 0 1 0-4.358 0L7.57 16.73l-1.32-.72V16a1.75 1.75 0 0 0-1.267-1.682a2 2 0 0 1-.027-.35V9.19a1.75 1.75 0 0 0 1.229-2.165zm4.476 12.85l-2.15-3.871a2.75 2.75 0 0 1-1.925 0l-2.151 3.871l1.75.954a1.747 1.747 0 0 1 2.726 0zM10.75 11a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarFerrisWheelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBoldIcon],svg[solar-figma-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFigmaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBoldDuotoneIcon],svg[solar-figma-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0"></svg:path><svg:path fill="currentColor" d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334" opacity=".2"></svg:path><svg:path fill="currentColor" d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z" opacity=".8"></svg:path>`,
})
export class SolarFigmaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBrokenIcon],svg[solar-figma-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.667H8.667m3.333 0V2H8.667a3.333 3.333 0 0 0 0 6.667m3.333 0v6.666H8.667M12 8.667h3.333m-6.666 0a3.333 3.333 0 0 0 0 6.666m0 0A3.333 3.333 0 1 0 12 18.667m3.333-10a3.333 3.333 0 1 0 0 6.666a3.333 3.333 0 0 0 0-6.666m0 0a3.333 3.333 0 0 0 0-6.667"></svg:path>`,
})
export class SolarFigmaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileBoldIcon],svg[solar-figma-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22M4.25 11.5A2.25 2.25 0 0 1 6.5 9.25h3A2.25 2.25 0 0 1 11.177 13a2.25 2.25 0 0 1-2.427 3.622v.878A2.25 2.25 0 1 1 4.823 16a2.24 2.24 0 0 1-.573-1.5c0-.576.217-1.102.573-1.5a2.24 2.24 0 0 1-.573-1.5m1.5 3a.75.75 0 0 1 .75-.75h.75v1.5H6.5a.75.75 0 0 1-.75-.75m1.5-2.25H6.5a.75.75 0 0 1 0-1.5h.75zm3-.75a.75.75 0 0 1-.75.75h-.75v-1.5h.75a.75.75 0 0 1 .75.75m-1.5 3a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M6.5 16.75h.75v.75a.75.75 0 1 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFigmaFileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileBoldDuotoneIcon],svg[solar-figma-file-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.376 11.5c-.76 0-1.376.638-1.376 1.424c0 .48.23.905.581 1.163A1.44 1.44 0 0 0 5 15.25c0 .48.23.905.581 1.163A1.44 1.44 0 0 0 5 17.576C5 18.362 5.616 19 6.376 19s1.377-.638 1.377-1.424v-1.223c.237.201.54.321.87.321c.76 0 1.377-.637 1.377-1.424c0-.48-.23-.905-.581-1.163c.351-.258.581-.682.581-1.163c0-.786-.616-1.424-1.376-1.424z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFigmaFileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileBrokenIcon],svg[solar-figma-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M5 11.5A1.5 1.5 0 0 1 6.5 10H8v3H6.5A1.5 1.5 0 0 1 5 11.5Zm0 3A1.5 1.5 0 0 1 6.5 13H8v3H6.5A1.5 1.5 0 0 1 5 14.5Zm0 3A1.5 1.5 0 0 1 6.5 16H8v1.5a1.5 1.5 0 0 1-3 0ZM8 10h1.5a1.5 1.5 0 0 1 0 3H8"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 14.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFigmaFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileLineDuotoneIcon],svg[solar-figma-file-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M5 11.5A1.5 1.5 0 0 1 6.5 10H8v3H6.5A1.5 1.5 0 0 1 5 11.5Zm0 3A1.5 1.5 0 0 1 6.5 13H8v3H6.5A1.5 1.5 0 0 1 5 14.5Zm0 3A1.5 1.5 0 0 1 6.5 16H8v1.5a1.5 1.5 0 0 1-3 0ZM8 10h1.5a1.5 1.5 0 0 1 0 3H8" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 14.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFigmaFileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileLinearIcon],svg[solar-figma-file-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M5 11.5A1.5 1.5 0 0 1 6.5 10H8v3H6.5A1.5 1.5 0 0 1 5 11.5Zm0 3A1.5 1.5 0 0 1 6.5 13H8v3H6.5A1.5 1.5 0 0 1 5 14.5Zm0 3A1.5 1.5 0 0 1 6.5 16H8v1.5a1.5 1.5 0 0 1-3 0ZM8 10h1.5a1.5 1.5 0 0 1 0 3H8"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 14.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"></svg:path></svg:g>`,
})
export class SolarFigmaFileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileOutlineIcon],svg[solar-figma-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M4.25 11.5A2.25 2.25 0 0 1 6.5 9.25h3A2.25 2.25 0 0 1 11.177 13a2.25 2.25 0 0 1-2.427 3.622v.878A2.25 2.25 0 1 1 4.823 16a2.24 2.24 0 0 1-.573-1.5c0-.576.217-1.102.573-1.5a2.24 2.24 0 0 1-.573-1.5m2.25 2.25a.75.75 0 1 0 0 1.5h.75v-1.5zm.75-1.5H6.5a.75.75 0 0 1 0-1.5h.75zm2.25 0a.75.75 0 0 0 0-1.5h-.75v1.5zm0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25 3H6.5a.75.75 0 1 0 .75.75z"></svg:path></svg:g>`,
})
export class SolarFigmaFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaLineDuotoneIcon],svg[solar-figma-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2H8.667a3.333 3.333 0 0 0 0 6.667H12z" opacity=".5"></svg:path><svg:path d="M12 8.667H8.667a3.333 3.333 0 0 0 0 6.666H12z"></svg:path><svg:path d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.334H12v3.333a3.333 3.333 0 1 1-3.333-3.334Z" opacity=".5"></svg:path><svg:path d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"></svg:path></svg:g>`,
})
export class SolarFigmaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaLinearIcon],svg[solar-figma-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12zm0 6.667H8.667a3.333 3.333 0 0 0 0 6.666H12z"></svg:path><svg:path d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.334H12v3.333a3.333 3.333 0 1 1-3.333-3.334Z"></svg:path><svg:path d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"></svg:path></svg:g>`,
})
export class SolarFigmaLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaOutlineIcon],svg[solar-figma-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.667 1.25a4.083 4.083 0 0 0-2.36 7.417A4.08 4.08 0 0 0 4.584 12c0 1.376.681 2.594 1.725 3.333a4.083 4.083 0 1 0 6.442 3.333v-3.504a4.083 4.083 0 1 0 4.942-6.496a4.083 4.083 0 0 0-2.36-7.417zm2.583 13.333H8.667a2.583 2.583 0 1 1 0-5.166h2.583zM8.667 7.917h2.583V2.75H8.667a2.583 2.583 0 1 0 0 5.167m9.25-2.584a2.583 2.583 0 0 1-2.58 2.584H12.75V2.75h2.584a2.583 2.583 0 0 1 2.583 2.583m-5.167 6.664a2.583 2.583 0 0 1 2.58-2.58h.006a2.583 2.583 0 1 1-2.586 2.586zm-4.083 4.086a2.583 2.583 0 1 0 2.583 2.584v-2.584z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFigmaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileBoldIcon],svg[solar-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path>`,
})
export class SolarFileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileBoldDuotoneIcon],svg[solar-file-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileBrokenIcon],svg[solar-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path></svg:g>`,
})
export class SolarFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckBoldIcon],svg[solar-file-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-3.502-7.56a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 0 1 1.122-.996l.772.87l2.106-2.37a.75.75 0 0 1 1.06-.063" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckBoldDuotoneIcon],svg[solar-file-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.56 15.498a.75.75 0 1 0-1.12-.996l-2.107 2.37l-.772-.87a.75.75 0 0 0-1.122.996l1.334 1.5a.75.75 0 0 0 1.12 0zm.95-13.238l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckBrokenIcon],svg[solar-file-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16.5L7.333 18L10 15"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckLineDuotoneIcon],svg[solar-file-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16.5L7.333 18L10 15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckLinearIcon],svg[solar-file-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16.5L7.333 18L10 15"></svg:path></svg:g>`,
})
export class SolarFileCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckOutlineIcon],svg[solar-file-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M10.498 14.44a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 1 1 1.122-.996l.772.87l2.106-2.37a.75.75 0 0 1 1.06-.062"></svg:path></svg:g>`,
})
export class SolarFileCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedBoldIcon],svg[solar-file-corrupted-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383M14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.447-.446-.723-.995-.894-1.713c-.119-.5-.179-.75-.064-1.042s.368-.461.874-.799l.626-.417a2.32 2.32 0 0 1 2.572 0a3.09 3.09 0 0 0 3.428 0a2.32 2.32 0 0 1 2.572 0a3.09 3.09 0 0 0 3.428 0a2.32 2.32 0 0 1 2.572 0a3.09 3.09 0 0 0 3.428 0a.162.162 0 0 1 .251.143c-.078 1.872-.328 3.02-1.137 3.828C19.657 22 17.771 22 14 22"></svg:path><svg:path fill="currentColor" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.088v.827a.62.62 0 0 1-.279.53a3.09 3.09 0 0 1-3.428 0a2.32 2.32 0 0 0-2.572 0a3.09 3.09 0 0 1-3.428 0a2.32 2.32 0 0 0-2.572 0a3.09 3.09 0 0 1-3.428 0a2.32 2.32 0 0 0-2.572 0l-.16.107c-.684.456-1.026.684-1.29.543S2 12.954 2 12.132z"></svg:path>`,
})
export class SolarFileCorruptedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedBoldDuotoneIcon],svg[solar-file-corrupted-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path><svg:path fill="currentColor" d="M2 13.662V9.775C2 6.11 2 4.277 3.172 3.139C4.343 2 6.239 2 10.03 2c.591 0 1.068 0 1.47.015l.01.244l-.01 2.749v.18c0 1.059.003 1.995.105 2.755c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5h.008c.007.357.007.765.007 1.238v1.106l-.012.006a5 5 0 0 0-.267.146a3.17 3.17 0 0 1-3.43 0a2.38 2.38 0 0 0-2.572 0a3.17 3.17 0 0 1-3.43 0a2.38 2.38 0 0 0-2.572 0a3.17 3.17 0 0 1-3.43 0a2.38 2.38 0 0 0-2.572 0c-.138.088-.206.133-.256.158c-.386.194-1.017.027-1.459-.29z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 22h4c3.771 0 5.657 0 6.829-.933c1.096-.874 1.166-2.246 1.171-4.881l-.012.005a5 5 0 0 0-.267.12c-1.039.55-2.392.55-3.43 0a2.82 2.82 0 0 0-2.572 0c-1.039.55-2.392.55-3.43 0a2.82 2.82 0 0 0-2.573 0c-1.038.55-2.39.55-3.43 0a2.82 2.82 0 0 0-2.572 0a4 4 0 0 1-.255.129c-.386.159-1.017.022-1.459-.238c.005 2.625.077 3.993 1.171 4.865C4.343 22 6.23 22 10 22"></svg:path>`,
})
export class SolarFileCorruptedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedBrokenIcon],svg[solar-file-corrupted-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path fill="currentColor" d="M14.004 21.25a.75.75 0 0 0 0 1.5zm-4.001 1.5a.75.75 0 0 0 0-1.5zM2.75 10a.75.75 0 0 0-1.5 0zm12.647-5.946l-.501.557zm3.96 3.563l.502-.558zm2.303 2.537l-.685.305zM3.172 20.828l.53-.53zm17.663 0l-.53-.53zM3.172 3.172l.53.53zm15.119 9.685l.416-.624zm3.43 0l-.416-.624zm-12.004 0l-.416-.624zm2.572 0l.416-.624zm-6.002 0l-.416.624zm-2.572 0l-.416-.624zm14.576 4l.416-.624zm3.43 0l.416.624zm-6.002 0l-.416-.624zm-3.43 0l.416-.624zm-2.572 0l-.416-.624zm6.002-4l-.416-.624zm-9.432 4l-.416.624zm-2.572 0l-.416-.624zm-.626.418l.416.624zm-.81 1.84l.729-.174zm19.693-2.117l.749.03zm.028-4.67l.75-.015zM2.214 18.072l.698.274zm-.208-5.83l.746-.084zm1.454.777l.344.666zM1.355 5.927a.75.75 0 0 0 1.493.146zM2.75 11.94V10h-1.5v1.94zm12.146-7.33l3.96 3.563l1.003-1.115l-3.96-3.563zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79zM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645zM10.003 21.25c-1.908 0-3.263-.002-4.291-.14c-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239c1.151.155 2.626.153 4.49.153zm4 1.5c1.866 0 3.34.002 4.491-.153c1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812c-1.027.138-2.383.14-4.29.14zm-3.97-21.5c-1.876 0-3.357-.002-4.513.153c-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812c1.033-.138 2.396-.14 4.313-.14zm7.842 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.34 2.34 0 0 1-2.598 0zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-.626.418l.626-.418l-.832-1.248l-.626.417zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028a.13.13 0 0 1 .055-.108zm-19.464 3.17a7 7 0 0 0-.657.47a1.7 1.7 0 0 0-.5.677l1.396.55l.01-.019a.5.5 0 0 1 .071-.07c.098-.084.244-.182.512-.36zm.335 2.29a4 4 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796zM1.25 11.94c0 .139-.001.277.01.385l1.492-.166l-.001-.039l-.001-.18zm2.049.293l-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195zm1.587-6.252c.121-1.234.383-1.9.854-2.371l-1.06-1.06c-.835.834-1.152 1.919-1.287 3.285z"></svg:path></svg:g>`,
})
export class SolarFileCorruptedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedLineDuotoneIcon],svg[solar-file-corrupted-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.397 4.054l-.501.557zm3.96 3.563l-.501.557zm2.303 2.537l-.685.305zM3.172 20.828l.53-.53zm17.663 0l-.53-.53zm-2.544-7.97l.416-.625zm3.43 0l-.416-.625zm-12.004 0l-.416-.625zm2.572 0l.416-.625zm-6.002 0l-.416.623zm-2.572 0l-.416-.625zm14.576 4l.416-.625zm3.43 0l.416.623zm-6.002 0l-.416-.625zm-3.43 0l.416-.625zm-2.572 0l-.416-.625zm6.002-4l-.416-.625zm-9.432 4l-.416.623zm-2.572 0l-.416-.625zm-.626.416l.416.625zm-.81 1.84l.729-.173zm19.693-2.116l.749.03zm.028-4.67l.75-.015zM2.214 18.072l.698.274zm-.208-5.83l.746-.084zm1.454.777l.344.666zm10.544 8.23h-4.001v1.5h4zM2.75 11.94V10h-1.5v1.94zm12.146-7.33l3.96 3.563l1.003-1.115l-3.96-3.563zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79zM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645zM10.003 21.25c-1.908 0-3.263-.002-4.291-.14c-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239c1.151.155 2.626.153 4.49.153zm4 1.5c1.866 0 3.34.002 4.491-.153c1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812c-1.027.138-2.383.14-4.29.14zM2.75 10c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06C1.893 3.39 1.56 4.337 1.403 5.51C1.248 6.66 1.25 8.136 1.25 10zm7.282-8.75c-1.875 0-3.356-.002-4.512.153c-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812c1.033-.138 2.396-.14 4.313-.14zm7.843 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.34 2.34 0 0 1-2.598 0zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-.626.418l.626-.418l-.832-1.248l-.626.417zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028a.13.13 0 0 1 .055-.108zm-19.464 3.17a7 7 0 0 0-.657.47a1.7 1.7 0 0 0-.5.677l1.396.55l.01-.019a.5.5 0 0 1 .071-.07c.098-.084.244-.182.512-.36zm.335 2.29a4 4 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796zM1.25 11.94c0 .139-.001.277.01.385l1.492-.166l-.001-.039l-.001-.18zm2.049.293l-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195z"></svg:path></svg:g>`,
})
export class SolarFileCorruptedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedLinearIcon],svg[solar-file-corrupted-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path fill="currentColor" d="m15.397 4.054l-.501.557zm3.96 3.563l-.501.557zm2.303 2.537l-.685.305zM3.172 20.828l.53-.53zm17.663 0l-.53-.53zm-2.544-7.97l.416-.625zm3.43 0l-.416-.625zm-12.004 0l-.416-.625zm2.572 0l.416-.625zm-6.002 0l-.416.623zm-2.572 0l-.416-.625zm14.576 4l.416-.625zm3.43 0l.416.623zm-6.002 0l-.416-.625zm-3.43 0l.416-.625zm-2.572 0l-.416-.625zm6.002-4l-.416-.625zm-9.432 4l-.416.623zm-2.572 0l-.416-.625zm-.626.416l.416.625zm-.81 1.84l.729-.173zm19.693-2.116l.749.03zm.028-4.67l.75-.015zM2.214 18.072l.698.274zm-.208-5.83l.746-.084zm1.454.777l.344.666zm10.544 8.23h-4.001v1.5h4zM2.75 11.94V10h-1.5v1.94zm12.146-7.33l3.96 3.563l1.003-1.115l-3.96-3.563zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79zM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645zM10.003 21.25c-1.908 0-3.263-.002-4.291-.14c-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239c1.151.155 2.626.153 4.49.153zm4 1.5c1.866 0 3.34.002 4.491-.153c1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812c-1.027.138-2.383.14-4.29.14zM2.75 10c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06C1.893 3.39 1.56 4.337 1.403 5.51C1.248 6.66 1.25 8.136 1.25 10zm7.282-8.75c-1.875 0-3.356-.002-4.512.153c-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812c1.033-.138 2.396-.14 4.313-.14zm7.843 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.34 2.34 0 0 1-2.598 0zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-.626.418l.626-.418l-.832-1.248l-.626.417zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028a.13.13 0 0 1 .055-.108zm-19.464 3.17a7 7 0 0 0-.657.47a1.7 1.7 0 0 0-.5.677l1.396.55l.01-.019a.5.5 0 0 1 .071-.07c.098-.084.244-.182.512-.36zm.335 2.29a4 4 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796zM1.25 11.94c0 .139-.001.277.01.385l1.492-.166l-.001-.039l-.001-.18zm2.049.293l-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195z"></svg:path></svg:g>`,
})
export class SolarFileCorruptedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedOutlineIcon],svg[solar-file-corrupted-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 2.834c-.46-.078-1.088-.084-2.217-.084c-1.918 0-3.28.002-4.314.14c-1.012.135-1.594.39-2.017.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v2.119l.002.042a.25.25 0 0 0 .36.193l.036-.022c.035-.022.08-.053.15-.1a3.07 3.07 0 0 1 3.405 0a2.34 2.34 0 0 0 2.598 0a3.07 3.07 0 0 1 3.404 0a2.34 2.34 0 0 0 2.598 0a3.07 3.07 0 0 1 3.404 0a2.34 2.34 0 0 0 2.542.036c-.016-.715-.062-1.163-.167-1.519h-3.136c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.772V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.026a46 46 0 0 0-1.17-1.076l-3.96-3.563c-.488-.439-.85-.762-1.146-1.005M10.178 1.25c1.385 0 2.28 0 3.103.315c.824.316 1.486.912 2.51 1.835l.108.096l3.96 3.563l.125.112c1.184 1.065 1.95 1.753 2.362 2.678c.319.717.385 1.472.404 2.464c.009.473-.227.911-.613 1.168c-1.29.86-2.971.86-4.262 0a1.57 1.57 0 0 0-1.74 0c-1.29.86-2.972.86-4.262 0a1.57 1.57 0 0 0-1.74 0c-1.29.86-2.971.86-4.262 0a1.57 1.57 0 0 0-1.74 0l-.03.02c-.106.07-.209.14-.297.185a1.75 1.75 0 0 1-2.543-1.36c-.011-.1-.011-.223-.011-.35V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.239-2.87s1.701-1.08 2.878-1.238c1.144-.153 2.608-.153 4.456-.153zM5.871 17.481a1.57 1.57 0 0 0-1.74 0l-.626.418a6 6 0 0 0-.512.36a.5.5 0 0 0-.07.07l-.01.018l-.001.002c-.007.017-.013.032-.007.096a4 4 0 0 0 .103.496c.147.618.369 1.032.694 1.357c.424.423 1.004.677 2.01.812c1.028.139 2.383.14 4.29.14h4.002c1.907 0 3.263-.002 4.29-.14c1.007-.135 1.587-.389 2.01-.812c.474-.473.73-1.135.852-2.348a3.84 3.84 0 0 1-3.28-.469a1.57 1.57 0 0 0-1.741 0c-1.29.86-2.972.86-4.262 0a1.57 1.57 0 0 0-1.74 0c-1.29.86-2.971.86-4.262 0M3.3 16.233a3.07 3.07 0 0 1 3.404 0a2.34 2.34 0 0 0 2.598 0a3.07 3.07 0 0 1 3.404 0a2.34 2.34 0 0 0 2.598 0a3.07 3.07 0 0 1 3.404 0a2.34 2.34 0 0 0 2.598 0a.911.911 0 0 1 1.416.796c-.078 1.883-.327 3.3-1.356 4.33c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.596.153-4.435.153H9.946c-1.838 0-3.294 0-4.434-.153c-1.172-.158-2.122-.49-2.87-1.238c-.567-.567-.898-1.252-1.093-2.07l-.021-.086c-.1-.416-.215-.887-.012-1.405c.116-.293.298-.503.5-.677c.177-.15.4-.3.628-.452z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileCorruptedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadBoldIcon],svg[solar-file-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-2.013-2.953a.75.75 0 0 0 1.026 0l2-1.875a.75.75 0 0 0-1.026-1.094l-.737.69V13.5a.75.75 0 0 0-1.5 0v3.269l-.737-.691a.75.75 0 0 0-1.026 1.094z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileDownloadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadBoldDuotoneIcon],svg[solar-file-download-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.013 19.047a.75.75 0 0 1-1.026 0l-2-1.875a.75.75 0 0 1 1.026-1.094l.737.69V13.5a.75.75 0 0 1 1.5 0v3.269l.737-.691a.75.75 0 0 1 1.026 1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileDownloadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadBrokenIcon],svg[solar-file-download-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 13.5v5m0 0l2-1.875m-2 1.875l-2-1.875"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileDownloadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadLineDuotoneIcon],svg[solar-file-download-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 13.5v5m0 0l2-1.875m-2 1.875l-2-1.875" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileDownloadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadLinearIcon],svg[solar-file-download-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 13.5v5m0 0l2-1.875m-2 1.875l-2-1.875"></svg:path></svg:g>`,
})
export class SolarFileDownloadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadOutlineIcon],svg[solar-file-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M7.987 19.047a.75.75 0 0 0 1.026 0l2-1.875a.75.75 0 0 0-1.026-1.094l-.737.69V13.5a.75.75 0 1 0-1.5 0v3.269l-.737-.691a.75.75 0 1 0-1.026 1.094z"></svg:path></svg:g>`,
})
export class SolarFileDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteBoldIcon],svg[solar-file-favourite-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4.048-8.801l-.098-.176C9.474 12.34 9.284 12 9 12s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.247.354s-.189.088-.398.135l-.191.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.116 1.352s.575.015 1.266-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileFavouriteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteBoldDuotoneIcon],svg[solar-file-favourite-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.854 14.023l.098.176c.108.194.162.29.247.354s.189.088.398.135l.191.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.116 1.352s-.575.015-1.266-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354l.098-.176C7.526 13.34 7.716 13 8 13s.474.34.854 1.023M11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileFavouriteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteBrokenIcon],svg[solar-file-favourite-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M8.146 13.023C8.526 12.34 8.716 12 9 12s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileFavouriteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteLineDuotoneIcon],svg[solar-file-favourite-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M8.146 13.023C8.526 12.34 8.716 12 9 12s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileFavouriteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteLinearIcon],svg[solar-file-favourite-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M8.146 13.023C8.526 12.34 8.716 12 9 12s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path></svg:g>`,
})
export class SolarFileFavouriteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteOutlineIcon],svg[solar-file-favourite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M9 13.035q-.086.149-.199.353l-.098.176l-.023.04c-.078.144-.208.382-.425.547c-.221.168-.488.226-.643.26l-.044.009l-.19.043c-.176.04-.318.072-.44.103c.079.098.182.219.316.376l.13.152q.015.015.03.035c.108.124.282.325.363.584c.08.256.052.52.035.686l-.005.047l-.02.203l-.042.46c.105-.046.223-.1.364-.165l.179-.082l.04-.02c.144-.067.393-.184.672-.184s.528.117.672.185l.04.019l.179.082q.209.098.364.165l-.042-.46l-.02-.203l-.005-.047c-.017-.166-.045-.43.035-.686c.08-.26.255-.46.363-.584l.03-.035l.13-.152c.134-.157.237-.278.316-.376a20 20 0 0 0-.44-.103l-.19-.043l-.044-.01c-.155-.033-.422-.091-.643-.26c-.217-.164-.347-.402-.425-.545l-.023-.04l-.098-.177q-.112-.204-.199-.354M8.014 11.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.023.041l.098.177l.057.1l.099.023l.19.043l.048.01c.327.075.653.148.903.247c.276.109.65.32.795.785c.142.455-.037.841-.193 1.09c-.145.23-.365.486-.59.749l-.03.035l-.13.153l-.082.097c.002.036.007.078.012.135l.02.203l.004.046c.034.352.067.692.055.965c-.012.285-.08.717-.468 1.01c-.4.304-.84.238-1.12.158c-.258-.074-.563-.215-.87-.356l-.043-.02l-.18-.083L9 18.186l-.085.038l-.179.083l-.044.02c-.306.141-.611.282-.869.355c-.28.08-.72.147-1.12-.156c-.387-.294-.456-.726-.468-1.011c-.012-.273.02-.613.055-.965l.004-.046l.02-.203l.013-.135l-.083-.097l-.13-.152l-.03-.036c-.225-.263-.445-.52-.59-.75c-.156-.248-.335-.634-.193-1.09c.144-.463.519-.675.795-.784c.25-.099.576-.172.903-.246l.047-.01l.191-.044l.1-.023l.056-.1l.098-.177l.023-.041c.17-.305.335-.602.5-.816"></svg:path></svg:g>`,
})
export class SolarFileFavouriteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftBoldIcon],svg[solar-file-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-4.547-5.487a.75.75 0 0 1 0-1.026l1.875-2a.75.75 0 0 1 1.094 1.026l-.69.737H11a.75.75 0 0 1 0 1.5H7.731l.691.737a.75.75 0 0 1-1.094 1.026z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftBoldDuotoneIcon],svg[solar-file-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.453 15.487a.75.75 0 0 0 0 1.026l1.875 2a.75.75 0 0 0 1.094-1.026l-.69-.737H11a.75.75 0 0 0 0-1.5H7.731l.691-.737a.75.75 0 0 0-1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftBrokenIcon],svg[solar-file-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16H6m0 0l1.875-2M6 16l1.875 2"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftLineDuotoneIcon],svg[solar-file-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16H6m0 0l1.875-2M6 16l1.875 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftLinearIcon],svg[solar-file-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16H6m0 0l1.875-2M6 16l1.875 2"></svg:path></svg:g>`,
})
export class SolarFileLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftOutlineIcon],svg[solar-file-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M5.453 16.513a.75.75 0 0 1 0-1.026l1.875-2a.75.75 0 1 1 1.094 1.026l-.69.737H11a.75.75 0 1 1 0 1.5H7.731l.691.737a.75.75 0 1 1-1.094 1.026z"></svg:path></svg:g>`,
})
export class SolarFileLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLineDuotoneIcon],svg[solar-file-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLinearIcon],svg[solar-file-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path></svg:g>`,
})
export class SolarFileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileOutlineIcon],svg[solar-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveBoldIcon],svg[solar-file-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-4.53-7.53a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 0 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveBoldDuotoneIcon],svg[solar-file-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.53 14.47a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zm4.98-12.21l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveBrokenIcon],svg[solar-file-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 18l3-3m0 3l-3-3"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveLineDuotoneIcon],svg[solar-file-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 18l3-3m0 3l-3-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveLinearIcon],svg[solar-file-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 18l3-3m0 3l-3-3"></svg:path></svg:g>`,
})
export class SolarFileRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveOutlineIcon],svg[solar-file-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M5.47 14.47a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 0 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class SolarFileRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightBoldIcon],svg[solar-file-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-.328-3.487l1.875-2a.75.75 0 0 0 0-1.026l-1.875-2a.75.75 0 0 0-1.094 1.026l.69.737H6a.75.75 0 0 0 0 1.5h3.269l-.691.737a.75.75 0 0 0 1.094 1.026" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightBoldDuotoneIcon],svg[solar-file-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.547 15.487a.75.75 0 0 1 0 1.026l-1.875 2a.75.75 0 0 1-1.094-1.026l.69-.737H6a.75.75 0 0 1 0-1.5h3.269l-.691-.737a.75.75 0 0 1 1.094-1.026zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightBrokenIcon],svg[solar-file-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16h5m0 0l-1.875-2M11 16l-1.875 2"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightLineDuotoneIcon],svg[solar-file-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16h5m0 0l-1.875-2M11 16l-1.875 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightLinearIcon],svg[solar-file-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16h5m0 0l-1.875-2M11 16l-1.875 2"></svg:path></svg:g>`,
})
export class SolarFileRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightOutlineIcon],svg[solar-file-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M11.547 16.513a.75.75 0 0 0 0-1.026l-1.875-2a.75.75 0 1 0-1.094 1.026l.69.737H6a.75.75 0 1 0 0 1.5h3.269l-.691.737a.75.75 0 1 0 1.094 1.026z"></svg:path></svg:g>`,
})
export class SolarFileRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendBoldIcon],svg[solar-file-send-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-.987-9.047a.75.75 0 0 0-1.026 0l-2 1.875a.75.75 0 0 0 1.026 1.094l.737-.69V18.5a.75.75 0 0 0 1.5 0v-3.269l.737.691a.75.75 0 0 0 1.026-1.094z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileSendBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendBoldDuotoneIcon],svg[solar-file-send-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.987 12.953a.75.75 0 0 1 1.026 0l2 1.875a.75.75 0 0 1-1.026 1.094l-.737-.69V18.5a.75.75 0 0 1-1.5 0v-3.269l-.737.691a.75.75 0 0 1-1.026-1.094zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileSendBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendBrokenIcon],svg[solar-file-send-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 18.5v-5m0 0l-2 1.875m2-1.875l2 1.875"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileSendBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendLineDuotoneIcon],svg[solar-file-send-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 18.5v-5m0 0l-2 1.875m2-1.875l2 1.875" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileSendLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendLinearIcon],svg[solar-file-send-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 18.5v-5m0 0l-2 1.875m2-1.875l2 1.875"></svg:path></svg:g>`,
})
export class SolarFileSendLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendOutlineIcon],svg[solar-file-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path><svg:path d="M9.013 12.953a.75.75 0 0 0-1.026 0l-2 1.875a.75.75 0 1 0 1.026 1.094l.737-.69V18.5a.75.75 0 0 0 1.5 0v-3.269l.737.691a.75.75 0 0 0 1.026-1.094z"></svg:path></svg:g>`,
})
export class SolarFileSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileBoldIcon],svg[solar-file-smile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m3-6c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5m-8.624 1.084a.75.75 0 0 1 1.04-.208a4.66 4.66 0 0 0 5.168 0a.75.75 0 0 1 .832 1.248a6.16 6.16 0 0 1-6.832 0a.75.75 0 0 1-.208-1.04M7 16c.552 0 1-.672 1-1.5S7.552 13 7 13s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileSmileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileBoldDuotoneIcon],svg[solar-file-smile-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 14.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m1.416 2.376a.75.75 0 0 0-.832 1.248a6.16 6.16 0 0 0 6.832 0a.75.75 0 1 0-.832-1.248a4.66 4.66 0 0 1-5.168 0M18 14.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileSmileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileBrokenIcon],svg[solar-file-smile-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:ellipse cx="17" cy="14.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17.5a5.41 5.41 0 0 0 6 0"></svg:path><svg:ellipse cx="7" cy="14.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileSmileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileLineDuotoneIcon],svg[solar-file-smile-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path><svg:ellipse cx="17" cy="14.5" fill="currentColor" opacity=".5" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17.5a5.41 5.41 0 0 0 6 0" opacity=".5"></svg:path><svg:ellipse cx="7" cy="14.5" fill="currentColor" opacity=".5" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarFileSmileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileLinearIcon],svg[solar-file-smile-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:ellipse cx="17" cy="14.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17.5a5.41 5.41 0 0 0 6 0"></svg:path><svg:ellipse cx="7" cy="14.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarFileSmileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileOutlineIcon],svg[solar-file-smile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 14.5c0 .829-.448 1.5-1 1.5s-1-.671-1-1.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.376 17.084a.75.75 0 0 1 1.04-.208a4.66 4.66 0 0 0 5.168 0a.75.75 0 1 1 .832 1.248a6.16 6.16 0 0 1-6.832 0a.75.75 0 0 1-.208-1.04" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 14.5c0 .829-.448 1.5-1 1.5s-1-.671-1-1.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5"></svg:path>`,
})
export class SolarFileSmileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextBoldIcon],svg[solar-file-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-8.75-7.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path>`,
})
export class SolarFileTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextBoldDuotoneIcon],svg[solar-file-text-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm5.51-14.99l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"></svg:path>`,
})
export class SolarFileTextBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextBrokenIcon],svg[solar-file-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 14.5h8M6 18h5.5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextLineDuotoneIcon],svg[solar-file-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 14.5h8M6 18h5.5" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFileTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextLinearIcon],svg[solar-file-text-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 14.5h8M6 18h5.5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path></svg:g>`,
})
export class SolarFileTextLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextOutlineIcon],svg[solar-file-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.25 14.5a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.202"></svg:path></svg:g>`,
})
export class SolarFileTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterBoldIcon],svg[solar-filter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3"></svg:path>`,
})
export class SolarFilterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterBoldDuotoneIcon],svg[solar-filter-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988" opacity=".5"></svg:path>`,
})
export class SolarFilterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterBrokenIcon],svg[solar-filter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.058 9.723c.948-.534 1.423-.801 1.682-1.232c.26-.43.26-.949.26-1.987v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49"></svg:path>`,
})
export class SolarFilterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterLineDuotoneIcon],svg[solar-filter-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 5.814v.69c0 1.038 0 1.557-.26 1.987s-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281s-1.607.05-3.486-.684c-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69"></svg:path><svg:path d="M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFilterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterLinearIcon],svg[solar-filter-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3Z"></svg:path>`,
})
export class SolarFilterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterOutlineIcon],svg[solar-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.953 2.25h14.094c.667 0 1.237 0 1.693.057c.483.061.95.198 1.334.558c.39.367.545.824.613 1.299c.063.437.063.98.063 1.6v.776c0 .489 0 .91-.036 1.263c-.04.38-.125.735-.331 1.076c-.205.339-.48.585-.798.805c-.299.208-.68.423-1.13.676l-2.942 1.656c-.67.377-.903.513-1.059.648c-.357.31-.562.655-.658 1.086c-.041.185-.046.417-.046 1.123v2.732c0 .901 0 1.666-.093 2.255c-.098.625-.327 1.225-.927 1.6c-.587.367-1.232.333-1.86.184c-.605-.143-1.35-.435-2.244-.784l-.086-.034c-.42-.164-.786-.307-1.076-.457c-.312-.161-.602-.361-.823-.673c-.225-.316-.314-.654-.355-1c-.036-.315-.036-.693-.036-1.115v-2.708c0-.706-.004-.938-.046-1.123a1.93 1.93 0 0 0-.658-1.086c-.156-.135-.39-.271-1.059-.648L3.545 10.36c-.45-.253-.831-.468-1.13-.676c-.318-.22-.593-.466-.798-.805c-.206-.341-.291-.697-.33-1.076c-.037-.352-.037-.774-.037-1.263v-.776c0-.62 0-1.163.063-1.6c.068-.475.223-.932.613-1.299c.384-.36.85-.497 1.334-.558c.456-.057 1.026-.057 1.693-.057M3.448 3.796c-.334.042-.44.11-.495.163c-.05.046-.114.127-.156.418c-.045.318-.047.752-.047 1.438v.69c0 .534 0 .878.028 1.144c.026.247.07.366.124.455c.055.091.147.194.368.348c.234.162.553.343 1.04.617l2.913 1.64l.08.045c.56.315.94.529 1.226.777a3.43 3.43 0 0 1 1.14 1.893c.081.367.081.78.081 1.36v2.759c0 .472.001.762.027.98c.022.198.059.265.086.304c.03.042.09.107.289.21c.212.109.505.224.967.405c.961.376 1.608.627 2.097.743c.479.114.637.055.718.004c.068-.043.173-.13.242-.563c.072-.457.074-1.103.074-2.084v-2.758c0-.58 0-.993.082-1.36a3.43 3.43 0 0 1 1.139-1.893c.286-.248.667-.463 1.225-.777l.081-.045l2.913-1.64c.487-.274.806-.455 1.04-.617c.221-.154.313-.257.368-.348c.054-.089.098-.208.123-.455c.028-.266.029-.61.029-1.145v-.69c0-.685-.002-1.12-.047-1.437c-.042-.291-.107-.372-.155-.418c-.056-.052-.162-.121-.496-.163c-.35-.045-.825-.046-1.552-.046H5c-.727 0-1.201.001-1.552.046" clip-rule="evenodd"></svg:path>`,
})
export class SolarFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBoldIcon],svg[solar-filters-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"></svg:path><svg:path fill="currentColor" d="M5.033 10.783a6 6 0 1 0 8.92 4.46a7.503 7.503 0 0 1-8.92-4.46m10.354 3.911q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558a7.53 7.53 0 0 1-3.58 3.91"></svg:path>`,
})
export class SolarFiltersBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBoldDuotoneIcon],svg[solar-filters-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"></svg:path><svg:path fill="currentColor" d="M13.58 13.79a6 6 0 0 1-7.16-3.58a6 6 0 1 0 7.16 3.58" opacity=".7"></svg:path><svg:path fill="currentColor" d="M13.58 13.79c.271.684.42 1.43.42 2.21a6 6 0 0 1-2 4.472a6 6 0 1 0 5.58-10.262a6.01 6.01 0 0 1-4 3.58" opacity=".4"></svg:path>`,
})
export class SolarFiltersBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBrokenIcon],svg[solar-filters-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 20.283A6 6 0 1 0 17.5 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 2.803A6 6 0 1 1 6.341 6"></svg:path><svg:path fill="currentColor" d="M8 22v-.75zm-6-6h-.75zm.153 3.375a.75.75 0 1 0 1.299-.75zm4.097 1.576a.75.75 0 0 0-.5 1.415zm7-4.951c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 16zm-10.5 0a5.25 5.25 0 0 1 3.937-5.085l-.374-1.452A6.75 6.75 0 0 0 1.25 16zm10.156-1.874c.222.58.344 1.212.344 1.874h1.5c0-.848-.157-1.66-.443-2.41zm-9.454 4.498A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.228.329 2.382.903 3.375zM8 21.25a5.2 5.2 0 0 1-1.75-.299l-.5 1.415A6.7 6.7 0 0 0 8 22.75z"></svg:path></svg:g>`,
})
export class SolarFiltersBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersLineDuotoneIcon],svg[solar-filters-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"></svg:path><svg:path d="M6.5 10.189a6 6 0 1 0 7.106 3.669"></svg:path><svg:path d="M12 20.472a6 6 0 1 0 5.5-10.283" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFiltersLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersLinearIcon],svg[solar-filters-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"></svg:path><svg:path d="M6.5 10.189a6 6 0 1 0 7.106 3.669"></svg:path><svg:path d="M12 20.472a6 6 0 1 0 5.5-10.283"></svg:path></svg:g>`,
})
export class SolarFiltersLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersOutlineIcon],svg[solar-filters-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a5.25 5.25 0 1 0 0 10.5a5.25 5.25 0 0 0 0-10.5M5.25 8a6.75 6.75 0 1 1 13.274 1.738A6.752 6.752 0 1 1 12 21.438a6.75 6.75 0 1 1-6.524-11.7A6.8 6.8 0 0 1 5.25 8m.77 3.136A5.252 5.252 0 0 0 8 21.25a5.25 5.25 0 0 0 5.079-6.586a6.75 6.75 0 0 1-7.058-3.529m8.504 3.126c.148.555.226 1.138.226 1.738a6.72 6.72 0 0 1-1.625 4.393a5.25 5.25 0 1 0 4.855-9.258a6.78 6.78 0 0 1-3.456 3.127" clip-rule="evenodd"></svg:path>`,
})
export class SolarFiltersOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireBoldIcon],svg[solar-fire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11c.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637c.47.546 1.159-.026 1.214-.744c.018-.226.246-.37.442-.256c.641.375 1.46 1.175 1.46 2.473c0 2.048-1.129 2.99-2.168 3.357"></svg:path>`,
})
export class SolarFireBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireBoldDuotoneIcon],svg[solar-fire-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"></svg:path>`,
})
export class SolarFireBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireBrokenIcon],svg[solar-fire-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 13.111C3 20.222 8.289 22 10.933 22c1.354 0 3.315-.357 5.067-1.39M18.72 18c.782-1.246 1.28-2.848 1.28-4.889c0-4.527-2.835-7.76-5.398-9.613C13.444 2.66 12 3.58 12 5.01v.323c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971A7.5 7.5 0 0 0 3.97 9.5"></svg:path><svg:path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555c0-1.102-.59-1.845-1.16-2.274c-.398-.299-.957-.03-1.094.449c-.178.624-.823 1.016-1.152.456c-.3-.512-.3-1.28-.3-1.743c0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z"></svg:path></svg:g>`,
})
export class SolarFireBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireLineDuotoneIcon],svg[solar-fire-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 13.111C20 20.222 13.956 22 10.933 22C8.29 22 3 20.222 3 13.111c0-2.782 1.461-4.65 2.86-5.716c.778-.594 1.77-.003 1.87.971l.086.838c.105 1.02 1.033 1.857 1.893 1.298C11.394 9.407 12 6.775 12 5.333V5.01c0-1.43 1.444-2.35 2.602-1.512C17.165 5.35 20 8.584 20 13.11Z"></svg:path><svg:path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555c0-1.102-.59-1.845-1.16-2.274c-.398-.299-.957-.03-1.094.449c-.178.624-.823 1.016-1.152.456c-.3-.512-.3-1.28-.3-1.743c0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFireLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireLinearIcon],svg[solar-fire-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 13.111C20 20.222 13.956 22 10.933 22C8.29 22 3 20.222 3 13.111c0-2.782 1.461-4.65 2.86-5.716c.778-.594 1.77-.003 1.87.971l.086.838c.105 1.02 1.033 1.857 1.893 1.298C11.394 9.407 12 6.775 12 5.333V5.01c0-1.43 1.444-2.35 2.602-1.512C17.165 5.35 20 8.584 20 13.11Z"></svg:path><svg:path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555c0-1.102-.59-1.845-1.16-2.274c-.398-.299-.957-.03-1.094.449c-.178.624-.823 1.016-1.152.456c-.3-.512-.3-1.28-.3-1.743c0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z"></svg:path></svg:g>`,
})
export class SolarFireLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticBoldIcon],svg[solar-fire-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21"></svg:path>`,
})
export class SolarFireMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticBoldDuotoneIcon],svg[solar-fire-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.477 16.059A8.99 8.99 0 0 1 12 12a8.99 8.99 0 0 1 7.523 4.059A7.1 7.1 0 0 0 20 13.504c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504c0 .897.168 1.757.477 2.555"></svg:path>`,
})
export class SolarFireMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticBrokenIcon],svg[solar-fire-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 19.997A8.4 8.4 0 0 1 12 21c-4.418 0-8-3.356-8-7.496c0-1.131.15-2.192.405-3.176m14.771 6.493c.528-1 .824-2.126.824-3.317c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534A14.6 14.6 0 0 0 6 6.647"></svg:path>`,
})
export class SolarFireMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticLineDuotoneIcon],svg[solar-fire-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21Z"></svg:path>`,
})
export class SolarFireMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticLinearIcon],svg[solar-fire-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21Z"></svg:path>`,
})
export class SolarFireMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticOutlineIcon],svg[solar-fire-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.887 4.29C6.937 6.135 4.75 9.309 4.75 13.505c0 3.68 3.2 6.746 7.25 6.746s7.25-3.065 7.25-6.746c0-3.267-1.679-5.889-2.975-7.278c-.393.83-.96 1.8-1.675 2.601c-.777.872-1.834 1.66-3.123 1.679c-.873.098-1.964-.247-2.55-1.457c-.497-1.023-.574-2.557-.04-4.758m1.21-1.808c.404.294.617.829.458 1.376c-.743 2.555-.59 3.896-.28 4.536c.27.557.704.665 1.054.619l.05-.007h.05c.678 0 1.377-.42 2.052-1.177c.662-.742 1.2-1.698 1.554-2.5c.326-.736 1.364-1.103 2.055-.417c1.49 1.479 3.66 4.583 3.66 8.592c0 4.6-3.964 8.246-8.75 8.246s-8.75-3.647-8.75-8.246c0-5.295 3.076-9.095 5.36-10.969a1.2 1.2 0 0 1 1.487-.053" clip-rule="evenodd"></svg:path>`,
})
export class SolarFireMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireOutlineIcon],svg[solar-fire-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.48 2.76c.752-.451 1.728-.473 2.562.13c2.66 1.924 5.708 5.355 5.708 10.221c0 3.807-1.635 6.254-3.718 7.724c-1.279.903-2.709 1.426-3.999 1.69a4.1 4.1 0 0 1-1.3.225q-.154 0-.327-.013a9 9 0 0 1-.473.013c-1.46 0-3.62-.484-5.429-1.944c-1.841-1.486-3.254-3.929-3.254-7.695c0-3.077 1.625-5.146 3.155-6.313a1.81 1.81 0 0 1 2.004-.164c.584.319.993.934 1.067 1.656l.086.837c.033.322.198.59.37.72a.37.37 0 0 0 .19.083c.036.003.094-.002.179-.057c.653-.425 1.149-1.188 1.482-2.086c.33-.89.467-1.82.467-2.454V5.01c0-.973.494-1.807 1.23-2.25m.151 18.317a10 10 0 0 1-1.204.157c-.484-.05-1.093-.214-1.603-.564c-.585-.4-1.074-1.064-1.074-2.226c0-1.402.868-2.467 1.79-3.149l.004.038v.011c0 .228 0 .573.043.931c.043.357.134.795.36 1.18c.158.269.4.496.729.593c.323.095.63.035.87-.078c.457-.215.783-.665.92-1.14c.412.336.784.86.784 1.615c0 1.203-.447 1.87-.938 2.254c-.214.168-.45.291-.68.378m2.887-1.055q.331-.189.65-.412c1.695-1.197 3.082-3.194 3.082-6.499c0-4.187-2.622-7.223-5.087-9.006c-.325-.234-.65-.215-.91-.059c-.276.166-.503.507-.503.964v.323c0 .809-.167 1.916-.56 2.976c-.391 1.052-1.04 2.151-2.072 2.822c-.734.477-1.526.34-2.091-.088c-.534-.403-.886-1.064-.957-1.763l-.086-.838c-.026-.252-.162-.42-.294-.491c-.112-.061-.234-.068-.375.04c-1.267.967-2.565 2.634-2.565 5.12c0 3.345 1.232 5.346 2.696 6.528c.397.32.817.584 1.241.8c-.273-.55-.437-1.21-.437-1.994c0-2.104 1.32-3.573 2.448-4.393a1.43 1.43 0 0 1 1.6-.076c.454.274.746.783.746 1.357c0 .235 0 .5.032.764q.008.064.018.124c.16-.369.454-.654.803-.806c.418-.18.95-.177 1.394.157c.7.526 1.459 1.47 1.459 2.873c0 .593-.084 1.118-.232 1.578" clip-rule="evenodd"></svg:path>`,
})
export class SolarFireOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareBoldIcon],svg[solar-fire-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667" clip-rule="evenodd"></svg:path>`,
})
export class SolarFireSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareBoldDuotoneIcon],svg[solar-fire-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667"></svg:path>`,
})
export class SolarFireSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareBrokenIcon],svg[solar-fire-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.558 15c.277-.643.442-1.414.442-2.333c0-2.611-1.54-4.505-3-5.635c-.748-.58-1.706.021-1.706.968c0 .643-.289 1.713-.873 2.501c-.64.861-1.465.001-1.523-1.07c-.026-.49-.534-.662-.942-.391C8.063 9.633 7 10.81 7 12.667C7 16.933 10.111 18 11.667 18a6 6 0 0 0 3.022-.86"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarFireSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareLineDuotoneIcon],svg[solar-fire-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path d="M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667Z"></svg:path></svg:g>`,
})
export class SolarFireSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareLinearIcon],svg[solar-fire-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667Z"></svg:path></svg:g>`,
})
export class SolarFireSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareOutlineIcon],svg[solar-fire-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m5.873 3.371a1.73 1.73 0 0 1 1.974.142c1.559 1.208 3.29 3.297 3.29 6.228c0 2.377-1.008 3.936-2.312 4.875c-1.266.911-2.762 1.208-3.771 1.208a5.52 5.52 0 0 1-3.394-1.238c-1.16-.954-2.023-2.507-2.023-4.845c0-2.18 1.258-3.566 2.291-4.252a1.43 1.43 0 0 1 1.302-.164c.463.18.776.61.804 1.14c.01.18.052.345.11.48a1 1 0 0 0 .084.152c.47-.653.703-1.544.703-2.023c0-.731.373-1.368.942-1.703m.761 1.292c-.097.058-.203.195-.203.411c0 .799-.338 2.027-1.021 2.948c-.239.321-.571.582-.997.642a1.36 1.36 0 0 1-1.06-.32c-.421-.345-.686-.9-.78-1.474c-.704.53-1.436 1.464-1.436 2.87c0 1.93.692 3.043 1.477 3.688a4.02 4.02 0 0 0 2.44.896c.768 0 1.938-.237 2.895-.925c.918-.661 1.688-1.77 1.688-3.658c0-2.291-1.35-3.99-2.709-5.043a.3.3 0 0 0-.162-.07a.23.23 0 0 0-.131.035" clip-rule="evenodd"></svg:path>`,
})
export class SolarFireSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2BoldIcon],svg[solar-flag-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.413.165a7.3 7.3 0 0 0 4.482.304a.73.73 0 0 1 .803 1.084l-1.278 2.131c-.342.57-.513.854-.553 1.163q-.025.195 0 .39c.04.309.211.594.553 1.163l1.56 2.6a.9.9 0 0 1-.553 1.336l-.1.025a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"></svg:path>`,
})
export class SolarFlag2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2BoldDuotoneIcon],svg[solar-flag-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.558 3.873l-.413-.165a8.7 8.7 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.084a7.3 7.3 0 0 1-4.482-.305"></svg:path>`,
})
export class SolarFlag2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2BrokenIcon],svg[solar-flag-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 22v-8m0 0l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.085a7.3 7.3 0 0 1-4.482-.304l-.413-.165a8.7 8.7 0 0 0-4.924-.452L5 4m0 10v-3m0-7V2m0 2v3"></svg:path>`,
})
export class SolarFlag2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2LineDuotoneIcon],svg[solar-flag-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5 22V2"></svg:path><svg:path d="m5 14l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.084a7.3 7.3 0 0 1-4.482-.305l-.413-.165a8.7 8.7 0 0 0-4.924-.452L5 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlag2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2LinearIcon],svg[solar-flag-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 22v-8m0 0V4m0 10l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.085a7.3 7.3 0 0 1-4.482-.304l-.413-.165a8.7 8.7 0 0 0-4.924-.452L5 4m0 0V2"></svg:path>`,
})
export class SolarFlag2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2OutlineIcon],svg[solar-flag-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v1.085l1.574-.315a9.43 9.43 0 0 1 5.35.492l.413.165a6.55 6.55 0 0 0 4.021.273c1.28-.32 2.307 1.067 1.628 2.197l-1.278 2.131c-.377.627-.437.757-.452.875a.8.8 0 0 0 0 .194c.015.118.075.248.452.875l1.56 2.601c.57.95.06 2.18-1.014 2.45l-.1.024a9.43 9.43 0 0 1-5.788-.393a7.93 7.93 0 0 0-4.498-.413l-1.868.374V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25m.75 11.835l1.574-.315a9.43 9.43 0 0 1 5.35.492a7.93 7.93 0 0 0 4.866.33l.1-.025a.15.15 0 0 0 .092-.222l-1.56-2.601l-.06-.098c-.282-.47-.532-.885-.594-1.354a2.3 2.3 0 0 1 0-.584c.062-.469.311-.884.595-1.353l.059-.099l1.253-2.09a8.05 8.05 0 0 1-4.895-.346l-.414-.166a7.93 7.93 0 0 0-4.498-.413l-1.868.374z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlag2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagBoldIcon],svg[solar-flag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.204.081a8 8 0 0 0 4.91.334a1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"></svg:path>`,
})
export class SolarFlagBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagBoldDuotoneIcon],svg[solar-flag-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.349 3.79l-.204-.082a8.7 8.7 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053a1.404 1.404 0 0 0 1.064-1.362V5.287a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334"></svg:path>`,
})
export class SolarFlagBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagBrokenIcon],svg[solar-flag-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 22v-8m0 0l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 10v-3m0-7V2m0 2v3"></svg:path>`,
})
export class SolarFlagBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagLineDuotoneIcon],svg[solar-flag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5 22V2"></svg:path><svg:path d="m5 14l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagLinearIcon],svg[solar-flag-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 22v-8m0 0V4m0 10l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 0V2"></svg:path>`,
})
export class SolarFlagLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagOutlineIcon],svg[solar-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v1.085l1.574-.315a9.43 9.43 0 0 1 5.35.492l.203.081a7.25 7.25 0 0 0 4.45.302a1.95 1.95 0 0 1 2.423 1.892v7.367c0 .988-.673 1.85-1.632 2.09l-.214.053a9.43 9.43 0 0 1-5.788-.393a7.93 7.93 0 0 0-4.498-.413l-1.868.374V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25m.75 11.835l1.574-.315a9.43 9.43 0 0 1 5.35.492a7.93 7.93 0 0 0 4.866.33l.215-.054a.654.654 0 0 0 .495-.634V5.537a.45.45 0 0 0-.559-.437a8.75 8.75 0 0 1-5.371-.364l-.204-.082a7.93 7.93 0 0 0-4.498-.413l-1.868.374z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameBoldIcon],svg[solar-flame-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.224.43-.174.95-.604.724C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15"></svg:path>`,
})
export class SolarFlameBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameBoldDuotoneIcon],svg[solar-flame-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15c0 4.255-2.618 6.122-4.641 6.751a.44.44 0 0 1-.233.012c-.289-.069-.432-.453-.224-.751c.88-1.266 1.898-3.196 1.898-5.012c0-1.95-1.644-4.253-2.928-5.674c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.202.39-.103.851-.482.77a.5.5 0 0 1-.122-.046C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15"></svg:path><svg:path fill="currentColor" d="M7.733 17.5c0 .93.36 1.905.767 2.69c.202.39-.103.852-.482.77c.482.54 3.658.957 7.108.803c-.289-.069-.432-.453-.224-.751c.88-1.265 1.898-3.196 1.898-5.012c0-1.95-1.644-4.253-2.928-5.674c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.251c-.166-.205-.466-.208-.657-.027c-.747.707-1.792 1.809-1.792 3.18" opacity=".5"></svg:path>`,
})
export class SolarFlameBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameBrokenIcon],svg[solar-flame-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.37 8c.992-1.525 1.974-3.09 2.586-4.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15c0 1.174-.2 2.166-.53 3M5.466 11C4.613 12.454 4 13.813 4 15c0 3.107 2.246 5.309 4.081 6.372c.421.243.83-.265.61-.698c-.486-.953-.958-2.185-.958-3.174c0-1.371 1.045-2.473 1.792-3.18c.191-.181.491-.179.657.026c.308.38.616.862.924 1.252a.412.412 0 0 0 .677-.037c.986-1.52 1.215-3.458 1.268-4.907c.016-.438.528-.653.821-.328C15.156 11.746 16.8 14.05 16.8 16c0 1.816-1.018 3.746-1.898 5.012c-.258.37.025.873.457.739a7 7 0 0 0 1.606-.74"></svg:path>`,
})
export class SolarFlameBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameLineDuotoneIcon],svg[solar-flame-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.359 21.751C17.382 21.121 20 19.254 20 15c0-4.622-5.056-9.586-8.427-12.154c-.557-.424-1.357-.119-1.617.53C8.31 7.496 4 11.855 4 15c0 3.107 2.246 5.309 4.081 6.372"></svg:path><svg:path d="M15.359 21.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.251c-.166-.205-.466-.208-.657-.027c-.747.707-1.792 1.809-1.792 3.18c0 .99.472 2.22.958 3.174c.22.433-.189.941-.61.698" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlameLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameLinearIcon],svg[solar-flame-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.011c0-1.95-1.644-4.254-2.928-5.674c-.293-.325-.805-.11-.821.328c-.053 1.449-.282 3.388-1.268 4.907a.412.412 0 0 1-.677.037c-.308-.39-.616-.872-.924-1.252c-.166-.205-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .99.472 2.22.958 3.174c.22.433-.189.941-.61.698C6.246 20.309 4 18.107 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15Z"></svg:path>`,
})
export class SolarFlameLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameOutlineIcon],svg[solar-flame-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.26 3.099c.404-1.011 1.735-1.636 2.767-.85c1.72 1.31 3.877 3.237 5.613 5.44c1.72 2.183 3.11 4.746 3.11 7.311c0 2.293-.71 3.997-1.738 5.218c-1.019 1.209-2.313 1.901-3.43 2.25a1.15 1.15 0 0 1-1.355-.514c-.24-.403-.241-.94.06-1.371c.857-1.232 1.763-3.004 1.763-4.583c0-.784-.338-1.711-.883-2.663a14.3 14.3 0 0 0-1.403-1.99c-.101 1.402-.406 3.165-1.352 4.623a1.162 1.162 0 0 1-1.894.093c-.159-.201-.316-.422-.46-.624l-.025-.036l-.225-.313c-.686.683-1.325 1.5-1.325 2.41c0 .804.401 1.902.876 2.834c.257.503.15 1.061-.16 1.427c-.328.388-.926.588-1.493.26C5.762 20.895 3.25 18.49 3.25 15c0-.947.321-1.926.77-2.883c.453-.963 1.066-1.967 1.71-2.97q.336-.52.675-1.04c1.105-1.693 2.2-3.371 2.855-5.008m1.638.318a.42.42 0 0 0-.245.238c-.716 1.79-1.913 3.622-3.018 5.313q-.33.505-.643.99c-.64.995-1.207 1.929-1.614 2.796c-.41.874-.628 1.62-.628 2.246c0 2.294 1.407 4.076 2.883 5.178c-.355-.84-.65-1.811-.65-2.678c0-1.73 1.3-3.037 2.026-3.725c.47-.445 1.282-.485 1.756.099c.17.211.338.446.49.66l.018.025l.125.175c.67-1.274.856-2.828.903-4.108c.02-.526.346-.943.774-1.117a1.2 1.2 0 0 1 1.354.314l-.557.503l.556-.503c.667.737 1.435 1.712 2.04 2.768c.598 1.043 1.082 2.242 1.082 3.409c0 1.693-.768 3.41-1.544 4.689a5.7 5.7 0 0 0 1.858-1.437c.787-.934 1.386-2.29 1.386-4.252c0-2.057-1.137-4.287-2.789-6.383C14.826 6.54 12.77 4.7 11.118 3.442c-.054-.041-.125-.057-.22-.025" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveBoldIcon],svg[solar-flash-drive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.255 9.54l.767-.767c2.17-2.17 3.254-3.255 4.603-3.255q.301 0 .59.073c1.106.275 2.167 1.336 4.012 3.18v.002h.001c1.58 1.58 2.585 2.585 3.014 3.535c.16.355.24.701.24 1.067c0 1.348-1.085 2.433-3.255 4.603l-.767.767C12.29 20.915 11.206 22 9.857 22s-2.433-1.085-4.602-3.255S2 15.491 2 14.142S3.085 11.71 5.255 9.54m-.53 4.072a.75.75 0 0 1 1.06 0l4.603 4.603a.75.75 0 0 1-1.06 1.06l-4.603-4.602a.75.75 0 0 1 0-1.06M19.83 4.17C21.277 5.616 22 6.34 22 7.238c0 .9-.723 1.622-2.17 3.069l-.635.636a8 8 0 0 0-.334-.47c-.604-.792-1.478-1.666-2.502-2.69l-.142-.142c-1.024-1.024-1.898-1.898-2.69-2.502a8 8 0 0 0-.47-.333l.636-.636C15.14 2.723 15.863 2 16.762 2c.898 0 1.622.723 3.068 2.17m-.209 2.33a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0M17.5 4.379a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.706-.707a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashDriveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveBoldDuotoneIcon],svg[solar-flash-drive-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.83 10.441L18.296 12l-.11.11l-.09-.088c-.49-.87-1.446-1.827-2.869-3.25c-1.408-1.407-2.359-2.359-3.221-2.853l1.687-1.714C15.139 2.735 15.863 2 16.76 2c.9 0 1.623.735 3.069 2.205C21.277 5.675 22 6.41 22 7.323s-.724 1.648-2.17 3.118" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14.142c0 1.348 1.085 2.433 3.255 4.603S8.509 22 9.857 22s2.434-1.085 4.603-3.255l.767-.767c2.17-2.17 3.255-3.255 3.255-4.603s-1.085-2.433-3.255-4.603s-3.254-3.254-4.602-3.254s-2.433 1.084-4.603 3.254l-.767.767C3.085 11.71 2 12.794 2 14.142m3.785-.53a.75.75 0 0 0-1.06 1.06l4.602 4.604a.75.75 0 1 0 1.061-1.06zm13.462-6.739a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0m-2.121-2.121a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashDriveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveBrokenIcon],svg[solar-flash-drive-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.83 10.441l.535.526zm-2.069 1.033a.75.75 0 1 0 1.07 1.052zm2.07-7.27l-.535.527zM22 7.324h.75zm-8.307-3.118l.535.526zM16.762 2v.75zm-5.297 3.4a.75.75 0 0 0 1.07 1.051zm7.83 4.515l-1.534 1.559l1.07 1.052l1.534-1.559zm0-5.184c.739.75 1.238 1.26 1.563 1.692c.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8c-.398-.532-.984-1.124-1.692-1.844zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843c.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9c-.325.432-.824.942-1.562 1.692zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587c.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708c-.523.406-1.106 1.001-1.814 1.72zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72c-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394c.425.33.926.837 1.665 1.587zm-7.206 0l-1.694 1.72l1.07 1.052l1.693-1.72z"></svg:path><svg:path fill="currentColor" d="M9.857 22v.75zm4.84-4.552a.75.75 0 0 0 1.06 1.06zm3.785-4.073h.75zM6.022 8.772l.53.53zm-.767.767l-.53-.53zm7.213 12.116a.75.75 0 1 0-.936-1.172zM5.785 10.07l.767-.767l-1.06-1.061l-.768.767zm-1.06 9.205c1.07 1.07 1.924 1.927 2.684 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.972-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685zm5.747 2.268c-.719.575-1.2.767-1.675.767v1.5c.968 0 1.777-.428 2.611-1.095zm-5.748-6.871a.75.75 0 0 0-1.06 1.06zm3.542 5.664a.75.75 0 0 0 1.06-1.06zm-4.603-4.603l4.603 4.603l1.06-1.06l-4.602-4.604z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.718 7.403l-.708.707m-1.414-2.828l-.707.707"></svg:path></svg:g>`,
})
export class SolarFlashDriveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveLineDuotoneIcon],svg[solar-flash-drive-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14.46 18.745l.53.53zm.767-.767l-.53-.53zm3.255-4.603h.75zM6.022 8.772l.53.53zm4.603-3.254v.75zm-5.37 4.021l-.53-.53zM2 14.142h-.75zm3.785-4.072l.767-.767l-1.06-1.061l-.768.767zm8.912 7.378l-.767.767l1.06 1.06l.768-.767zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375c-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968c.76-.58 1.615-1.437 2.685-2.507zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685z"></svg:path><svg:path fill="currentColor" d="M5.785 13.612a.75.75 0 0 0-1.06 1.06zm3.542 5.664a.75.75 0 1 0 1.061-1.06zm-4.602-4.603l4.602 4.603l1.061-1.06l-4.603-4.604z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m19.83 10.441l.535.526zm-2.069 1.033a.75.75 0 1 0 1.07 1.052zm2.07-7.27l-.535.527zM22 7.324h.75zm-8.307-3.118l.535.526zM16.762 2v.75zm-5.297 3.4a.75.75 0 0 0 1.07 1.051zm7.83 4.515l-1.534 1.559l1.07 1.052l1.534-1.559zm0-5.184c.739.75 1.238 1.26 1.563 1.692c.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8c-.398-.532-.984-1.124-1.692-1.844zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843c.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9c-.325.432-.824.942-1.562 1.692zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587c.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708c-.523.406-1.106 1.001-1.814 1.72zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72c-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394c.425.33.926.837 1.665 1.587zm-7.206 0l-1.694 1.72l1.07 1.052l1.693-1.72z"></svg:path><svg:path fill="currentColor" d="m14.46 18.745l.53.53zm.767-.767l-.53-.53zm3.255-4.603h.75zM6.022 8.772l.53.53zm-.767.767l-.53-.53zm.53.53l.767-.766l-1.06-1.061l-.768.767zm8.912 7.379l-.767.767l1.06 1.06l.768-.767zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375c-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968c.76-.58 1.615-1.437 2.685-2.507zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.717 7.403l-.707.707m-1.414-2.828l-.707.707" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlashDriveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveLinearIcon],svg[solar-flash-drive-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14.46 18.745l.53.53zm.767-.767l-.53-.53zm3.255-4.603h.75zM6.022 8.772l.53.53zm4.603-3.254v.75zm-5.37 4.021l-.53-.53zM2 14.142h-.75zm3.785-.53a.75.75 0 0 0-1.06 1.06zm3.542 5.663a.75.75 0 0 0 1.06-1.06zM5.785 10.07l.767-.767l-1.06-1.061l-.768.767zm8.912 7.378l-.767.767l1.06 1.06l.768-.767zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375c-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968c.76-.58 1.615-1.437 2.685-2.507zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685zm-1.06-3.543l4.602 4.603l1.06-1.06l-4.602-4.603z"></svg:path><svg:path fill="currentColor" d="m19.83 10.441l.535.526zm-2.069 1.033a.75.75 0 1 0 1.07 1.052zm2.07-7.27l-.535.527zM22 7.324h.75zm-8.307-3.118l.535.526zM16.762 2v.75zm-5.297 3.4a.75.75 0 0 0 1.07 1.051zm7.83 4.515l-1.534 1.559l1.07 1.052l1.534-1.559zm0-5.184c.739.75 1.238 1.26 1.563 1.692c.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8c-.398-.532-.984-1.124-1.692-1.844zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843c.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9c-.325.432-.824.942-1.562 1.692zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587c.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708c-.523.406-1.106 1.001-1.814 1.72zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72c-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394c.425.33.926.837 1.665 1.587zm-7.206 0l-1.694 1.72l1.07 1.052l1.693-1.72z"></svg:path><svg:path fill="currentColor" d="m14.46 18.745l.53.53zm.767-.767l-.53-.53zm3.255-4.603h.75zM6.022 8.772l.53.53zm-.767.767l-.53-.53zm.53 4.073a.75.75 0 0 0-1.06 1.06zm3.542 5.663a.75.75 0 0 0 1.06-1.06zM5.785 10.07l.767-.767l-1.06-1.061l-.768.767zm8.912 7.378l-.767.767l1.06 1.06l.768-.767zm-.767.767c-1.1 1.1-1.873 1.87-2.534 2.375c-.644.491-1.094.66-1.539.66v1.5c.905 0 1.671-.374 2.449-.968c.76-.58 1.615-1.437 2.685-2.507zm-9.206 1.06c1.07 1.07 1.925 1.927 2.685 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.973-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685zm-1.06-3.543l4.602 4.603l1.06-1.06l-4.602-4.603z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.717 7.403l-.707.707m-1.414-2.828l-.707.707"></svg:path></svg:g>`,
})
export class SolarFlashDriveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveOutlineIcon],svg[solar-flash-drive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.892 3.144c-.425.33-.926.837-1.664 1.587l-1.06 1.077c.727.571 1.543 1.387 2.55 2.395l.079.078c1.052 1.052 1.895 1.895 2.468 2.646l.015.02l1.016-1.032c.738-.75 1.237-1.26 1.562-1.692c.31-.414.392-.67.392-.9s-.081-.486-.392-.9c-.325-.432-.824-.942-1.562-1.692s-1.24-1.258-1.665-1.587c-.408-.316-.654-.394-.87-.394s-.46.078-.869.394m3.156 9.161l1.354-1.375c.691-.703 1.263-1.285 1.655-1.806c.412-.55.693-1.118.693-1.801s-.28-1.252-.693-1.8c-.392-.523-.964-1.104-1.655-1.807l-.075-.075c-.691-.703-1.263-1.284-1.777-1.683c-.54-.418-1.105-.708-1.788-.708c-.684 0-1.249.29-1.789.708c-.514.399-1.086.98-1.777 1.683L11.849 5.01a3.2 3.2 0 0 0-1.224-.242c-.904 0-1.67.374-2.449.967c-.75.573-1.594 1.416-2.645 2.468l-.846.846C3.634 10.1 2.79 10.943 2.217 11.694c-.593.778-.967 1.545-.967 2.449s.374 1.67.967 2.448c.573.75 1.417 1.594 2.468 2.646l.078.078c1.052 1.051 1.895 1.895 2.646 2.468c.778.593 1.544.967 2.448.967c.905 0 1.671-.374 2.449-.967c.75-.573 1.594-1.417 2.646-2.468l.845-.846c1.052-1.051 1.895-1.894 2.468-2.645c.593-.778.967-1.545.967-2.449c0-.377-.065-.73-.184-1.07m-7.504-5.784c-.343-.183-.633-.253-.92-.253c-.444 0-.893.168-1.538.66c-.661.505-1.434 1.275-2.534 2.375l-.767.767c-1.1 1.1-1.87 1.873-2.375 2.534c-.492.645-.66 1.094-.66 1.539s.168.894.66 1.538c.505.662 1.275 1.434 2.375 2.534s1.873 1.87 2.534 2.375c.644.492 1.094.66 1.538.66c.445 0 .895-.168 1.539-.66c.661-.505 1.434-1.275 2.534-2.375l.767-.767c1.1-1.1 1.87-1.873 2.375-2.534c.492-.644.66-1.094.66-1.539s-.168-.894-.66-1.538c-.505-.662-1.275-1.434-2.375-2.534s-1.872-1.87-2.534-2.375a5 5 0 0 0-.444-.307a.8.8 0 0 1-.175-.1m5.583-1.769a.75.75 0 0 1 0 1.06l-.708.708a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0m2.12 2.121a.75.75 0 0 1 0 1.061l-.706.707a.75.75 0 0 1-1.061-1.06l.707-.708a.75.75 0 0 1 1.06 0m-14.523 6.74a.75.75 0 0 1 1.061 0l4.603 4.602a.75.75 0 0 1-1.06 1.06l-4.604-4.602a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashDriveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightBoldIcon],svg[solar-flashlight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4.25H4V4c0-.943 0-1.414.293-1.707S5.057 2 6 2h12c.943 0 1.414 0 1.707.293S20 3.057 20 4zm-3.828 4.578c-.163.163-.302.302-.422.427V9.25h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 5.75h14.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.377 0-.668.015-.907h-6.03c.015.24.015.53.015.907M12.75 13a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashlightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightBoldDuotoneIcon],svg[solar-flashlight-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.657V19c0 .932 0 1.398.153 1.765a2 2 0 0 0 1.082 1.083C10.602 22 11.069 22 12 22c.932 0 1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.153-1.594L15.18 10H8.82q.015.03.028.063C9 10.431 9 10.84 9 11.657" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 12.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20 4.172V4c0-.943 0-1.414-.293-1.707S18.943 2 18 2H6c-.943 0-1.414 0-1.707.293S4 3.057 4 4v.172c0 .408 0 .613.076.796L4.09 5h15.82q.008-.014.014-.032C20 4.785 20 4.58 20 4.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="m16.171 8.828l3.243-3.242c.272-.273.416-.417.496-.586H4.09c.08.17.223.313.496.586l3.242 3.242c.545.545.833.833.992 1.172h6.36c.159-.339.447-.627.991-1.172"></svg:path>`,
})
export class SolarFlashlightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightBrokenIcon],svg[solar-flashlight-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 2h1c.943 0 1.414 0 1.707.293S20 3.057 20 4v.172c0 .408 0 .613-.076.796s-.22.329-.51.618l-3.242 3.242c-.578.578-.867.868-1.02 1.235c-.152.368-.152.776-.152 1.594V19c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C13.398 22 12.932 22 12 22v0c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 20.398 9 19.932 9 19v-7.343c0-.818 0-1.226-.152-1.594c-.152-.367-.442-.657-1.02-1.235L4.586 5.586c-.29-.29-.434-.434-.51-.618C4 4.785 4 4.58 4 4.172V4c0-.943 0-1.414.293-1.707S5.057 2 6 2h7m2 8H9m3 3v2M4.5 5h15"></svg:path>`,
})
export class SolarFlashlightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightLineDuotoneIcon],svg[solar-flashlight-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.152-1.594c.153-.367.442-.657 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.618C20 4.785 20 4.58 20 4.172V4c0-.943 0-1.414-.293-1.707S18.943 2 18 2H6c-.943 0-1.414 0-1.707.293S4 3.057 4 4v.172c0 .408 0 .613.076.796s.22.329.51.618l3.242 3.242c.578.578.868.868 1.02 1.235S9 10.84 9 11.657Z"></svg:path><svg:path d="M15 10H9m3 3v2M4.5 5h15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlashlightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightLinearIcon],svg[solar-flashlight-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.152-1.594c.153-.367.442-.657 1.02-1.235h0l3.242-3.242c.29-.29.434-.434.51-.618C20 4.785 20 4.58 20 4.172V4c0-.943 0-1.414-.293-1.707S18.943 2 18 2H6c-.943 0-1.414 0-1.707.293S4 3.057 4 4v.172c0 .408 0 .613.076.796s.22.329.51.618l3.242 3.242c.578.578.868.868 1.02 1.235S9 10.84 9 11.657ZM15 10H9m3 3v2M4.5 5h15"></svg:path>`,
})
export class SolarFlashlightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnBoldIcon],svg[solar-flashlight-on-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-6.22.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zm12 0a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M20 10v.25H4V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h12c.943 0 1.414 0 1.707.293S20 9.057 20 10m-3.828 4.828c-.163.163-.302.302-.422.427v-.005h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 11.75h14.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 20v-2.343c0-.378 0-.668-.015-.907h6.03c-.015.24-.015.53-.015.907V20c0 .943 0 1.414-.293 1.707S13.943 22 13 22h-2c-.943 0-1.414 0-1.707-.293S9 20.943 9 20m3-1.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashlightOnBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnBoldDuotoneIcon],svg[solar-flashlight-on-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19v-1.343c0-.818 0-1.226-.152-1.594L8.82 16h6.36q-.015.03-.027.063C15 16.431 15 16.84 15 17.657V20c0 .943 0 1.414-.293 1.707C14.416 22 13.944 22 13 22h-2c-.942 0-1.414 0-1.707-.293S9 20.943 9 20z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20 10.172V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v.172c0 .408 0 .613.076.797L4.09 11h15.82l.014-.031c.076-.184.076-.389.076-.797" opacity=".5"></svg:path><svg:path fill="currentColor" d="m16.171 14.828l3.243-3.242c.272-.273.416-.417.496-.586H4.09c.08.17.223.313.496.586l3.242 3.242c.545.545.833.833.992 1.172h6.36c.159-.339.447-.627.991-1.172M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-6.22.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zm12 0a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class SolarFlashlightOnBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnBrokenIcon],svg[solar-flashlight-on-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 22v-4.343c0-.818 0-1.226.152-1.594c.153-.367.442-.656 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.617c.076-.184.076-.389.076-.797V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8h-1M9 22v-4.343c0-.818 0-1.226-.152-1.594c-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h7m2 8H9m-4.5-5h15M12 5V2M8 5L6 3m10 2l2-2m-6 16v2"></svg:path>`,
})
export class SolarFlashlightOnBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnLineDuotoneIcon],svg[solar-flashlight-on-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 22v-4.343c0-.818 0-1.226-.152-1.594c-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h12c.943 0 1.414 0 1.707.293S20 9.057 20 10v.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-3.242 3.242c-.578.579-.867.867-1.02 1.235c-.152.368-.152.776-.152 1.594V22m0-6H9"></svg:path><svg:path d="M4.5 11h15M12 5V2" opacity=".5"></svg:path><svg:path d="M8 5L6 3m10 2l2-2"></svg:path><svg:path d="M12 19v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlashlightOnLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnLinearIcon],svg[solar-flashlight-on-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 22v-4.343c0-.818 0-1.226.152-1.594c.153-.367.442-.656 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.617c.076-.184.076-.389.076-.797V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v.172c0 .408 0 .613.076.797c.076.183.22.328.51.617l3.242 3.242c.578.579.868.867 1.02 1.235S9 16.84 9 17.657V22m6-6H9m-4.5-5h15M12 5V2M8 5L6 3m10 2l2-2m-6 16v2"></svg:path>`,
})
export class SolarFlashlightOnLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnOutlineIcon],svg[solar-flashlight-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.955 7.25h12.09c.432 0 .83 0 1.152.043c.355.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.297c0 .325.002.677-.133 1.003c-.136.327-.385.575-.616.805l-.057.056l-3.242 3.243c-.622.621-.775.793-.857.991s-.095.428-.095 1.307V22a.75.75 0 0 1-1.5 0v-4.464c0-.284 0-.544.013-.786H9.737c.013.242.013.502.013.786V22a.75.75 0 0 1-1.5 0v-4.343c0-.879-.013-1.11-.095-1.307c-.082-.198-.236-.37-.857-.991l-3.243-3.243L4 12.06c-.231-.23-.48-.478-.616-.805c-.135-.326-.134-.678-.133-1.003v-.297c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04c.308-.31.684-.422 1.04-.47c.322-.043.72-.043 1.152-.043m9.6 7.134c-.311.31-.582.581-.793.866H9.237c-.21-.285-.481-.555-.793-.867L5.81 11.75h12.38zm3.695-4.134V10c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.037-.167l-.003-.006l-.002-.004l-.001-.003l-.003-.001l-.004-.002l-.006-.003a.7.7 0 0 0-.167-.037c-.21-.028-.505-.03-.997-.03H6c-.493 0-.787.002-.998.03a.7.7 0 0 0-.176.042l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.029.21-.03.504-.03.997v.25z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zm12 0a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M12.75 19a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarFlashlightOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOutlineIcon],svg[solar-flashlight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.955 1.25c-.433 0-.83 0-1.152.043c-.356.048-.732.16-1.04.47c-.31.309-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v.297c-.001.325-.002.677.133 1.003c.135.327.385.575.616.805l.056.056L7.298 9.36c.621.621.775.793.857.991s.095.428.095 1.307v7.368c0 .445 0 .816.02 1.12c.022.317.069.617.19.907a2.75 2.75 0 0 0 1.487 1.489c.29.12.59.167.908.188c.304.021.675.021 1.12.021h.05c.444 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.166-.59.188-.907c.02-.304.02-.675.02-1.12v-7.368c0-.879.014-1.11.096-1.307c.082-.198.235-.37.857-.991l3.242-3.243l.057-.056c.231-.23.48-.478.616-.805c.135-.326.134-.678.133-1.003v-.297c0-.433 0-.83-.044-1.152c-.047-.356-.16-.731-.469-1.04s-.684-.422-1.04-.47c-.323-.043-.72-.043-1.152-.043zm-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.029.21-.03.504-.03.997v.25h14.5V4c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.505-.03-.997-.03H6c-.493 0-.787.002-.998.03a.7.7 0 0 0-.176.042M18.19 5.75H5.81l2.634 2.634c.312.31.583.581.793.866h5.525c.21-.285.482-.555.793-.866zm-3.926 5H9.737c.013.242.013.502.013.786V19c0 .476 0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.676.677c.078.032.195.061.436.078c.247.017.567.017 1.043.017s.796 0 1.043-.017c.24-.017.358-.046.435-.078c.306-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.016-.247.017-.567.017-1.043v-7.464c0-.284 0-.543.013-.786" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashlightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalBoldIcon],svg[solar-flip-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18.114V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114m20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m0 8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m0 8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalBoldDuotoneIcon],svg[solar-flip-horizontal-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.887v12.227c0 1.702 0 2.553-.542 2.832c-.543.28-1.235-.215-2.62-1.205l-1.582-1.13c-.616-.439-.924-.659-1.09-.982S16 16.927 16 16.171V7.83c0-.757 0-1.135.166-1.458c.166-.324.474-.543 1.09-.983l1.581-1.13c1.386-.99 2.078-1.484 2.62-1.205c.543.28.543 1.13.543 2.833m-20 0v12.227c0 1.702 0 2.553.542 2.832c.543.28 1.235-.215 2.62-1.205l1.582-1.13c.616-.439.924-.659 1.09-.982S8 16.927 8 16.171V7.83c0-.757 0-1.135-.166-1.458c-.166-.324-.474-.543-1.09-.983l-1.582-1.13c-1.385-.99-2.077-1.484-2.62-1.205C2 3.334 2 4.184 2 5.887" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75m0-8a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75m0-8a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipHorizontalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalBrokenIcon],svg[solar-flip-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 8V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114V12m20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832v-2.057M12 14v-4m0-4V2m0 20v-4"></svg:path>`,
})
export class SolarFlipHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalLineDuotoneIcon],svg[solar-flip-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 18.114V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114Zm20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832Z"></svg:path><svg:path stroke-linecap="round" d="M12 14v-4m0-4V2m0 20v-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlipHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalLinearIcon],svg[solar-flip-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 18.114V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114Zm20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832Z"></svg:path><svg:path stroke-linecap="round" d="M12 14v-4m0-4V2m0 20v-4"></svg:path></svg:g>`,
})
export class SolarFlipHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalOutlineIcon],svg[solar-flip-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M5.55 3.614l.048.035l1.606 1.146c.287.206.542.387.743.56c.217.187.411.396.554.673c.142.277.2.556.225.842c.024.264.024.577.024.93v8.4c0 .353 0 .666-.024.93a2.2 2.2 0 0 1-.225.842a2.2 2.2 0 0 1-.554.673c-.201.173-.456.355-.743.56L5.55 20.386c-.651.465-1.208.863-1.671 1.1c-.473.243-1.074.438-1.68.127c-.605-.312-.796-.915-.873-1.44c-.076-.516-.076-1.2-.076-2V5.827c0-.8 0-1.483.076-1.999c.077-.525.268-1.128.873-1.44c.606-.312 1.207-.116 1.68.126c.463.238 1.02.636 1.67 1.1m-2.693.115q-.001-.002.013-.002zm.033 0c.044.007.136.033.304.12c.353.18.82.51 1.533 1.02L6.307 6c.32.227.518.37.661.493a.8.8 0 0 1 .199.222a.8.8 0 0 1 .065.291c.017.188.018.433.018.825v8.34c0 .392 0 .637-.018.825a.8.8 0 0 1-.065.29a.8.8 0 0 1-.199.223a10 10 0 0 1-.66.493l-1.581 1.13c-.714.51-1.18.84-1.533 1.02a1.1 1.1 0 0 1-.304.12c-.02-.04-.053-.13-.08-.317c-.058-.393-.06-.964-.06-1.84V5.886c0-.876.002-1.448.06-1.84c.027-.187.06-.277.08-.317m-.033 16.542l.013.002q-.015 0-.013-.002m.043.017l.009.01zm0-16.576q.008-.011.009-.01t-.01.01m17.906.136c-.353.181-.82.512-1.533 1.021L17.694 6a10 10 0 0 0-.661.493a.8.8 0 0 0-.199.222a.8.8 0 0 0-.065.291c-.017.188-.018.433-.018.825v8.34c0 .392 0 .637.018.825a.8.8 0 0 0 .065.29a.8.8 0 0 0 .199.223c.143.123.341.266.66.493l1.581 1.13c.714.51 1.18.84 1.533 1.02a1.1 1.1 0 0 0 .304.12a1.1 1.1 0 0 0 .08-.317c.058-.393.06-.964.06-1.84V5.886c0-.876-.002-1.448-.06-1.84a1.1 1.1 0 0 0-.08-.317a1.1 1.1 0 0 0-.304.12m.337-.12h-.013zm-.043-.016l-.009-.01l.01.01m-.009 16.586l.01-.01zm.039-.025q.012-.003.013-.002q.001.002-.013.002m-1.009-17.76c.473-.242 1.074-.438 1.68-.126s.796.915.873 1.44c.076.516.076 1.2.076 2v12.347c0 .8 0 1.483-.076 1.999c-.077.525-.268 1.128-.873 1.44c-.606.311-1.207.116-1.68-.127c-.463-.237-1.02-.635-1.67-1.1l-1.655-1.181a11 11 0 0 1-.742-.56a2.2 2.2 0 0 1-.555-.673a2.2 2.2 0 0 1-.225-.842c-.024-.264-.024-.577-.024-.93V7.8c0-.353 0-.666.024-.93c.026-.286.083-.565.225-.842s.337-.486.554-.673c.201-.173.456-.354.743-.56l1.654-1.181c.651-.465 1.208-.863 1.671-1.1M12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m0 8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalBoldIcon],svg[solar-flip-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.114 22H5.886c-1.702 0-2.553 0-2.832-.542c-.28-.543.216-1.235 1.205-2.62l1.13-1.582c.44-.616.66-.924.982-1.09C6.694 16 7.073 16 7.83 16h8.34c.757 0 1.136 0 1.459.166s.543.474.983 1.09l1.13 1.581c.988 1.386 1.483 2.078 1.204 2.62s-1.13.543-2.832.543m0-20H5.886c-1.702 0-2.553 0-2.832.542c-.28.543.216 1.235 1.205 2.62l1.13 1.582c.44.616.66.924.982 1.09C6.694 8 7.073 8 7.83 8h8.34c.757 0 1.136 0 1.459-.166s.543-.474.983-1.09l1.13-1.582c.988-1.385 1.483-2.077 1.204-2.62C20.666 2 19.816 2 18.114 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalBoldDuotoneIcon],svg[solar-flip-vertical-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.113 22H5.886c-1.702 0-2.553 0-2.832-.542c-.28-.543.215-1.235 1.205-2.62l1.13-1.582c.439-.616.659-.924.982-1.09S7.073 16 7.83 16h8.341c.757 0 1.135 0 1.458.166c.324.166.544.474.983 1.09l1.13 1.581c.99 1.386 1.484 2.078 1.205 2.62c-.28.543-1.13.543-2.833.543m-.001-20H5.886c-1.702 0-2.553 0-2.832.542c-.28.543.215 1.235 1.205 2.62l1.13 1.582c.439.616.659.924.982 1.09S7.073 8 7.83 8h8.341c.757 0 1.135 0 1.458-.166c.324-.166.544-.474.983-1.09l1.13-1.582c.99-1.385 1.484-2.077 1.205-2.62C20.666 2 19.816 2 18.113 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipVerticalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalBrokenIcon],svg[solar-flip-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 22H5.886c-1.702 0-2.553 0-2.832-.542c-.28-.543.215-1.235 1.205-2.62l1.13-1.582c.439-.616.659-.924.982-1.09S7.073 16 7.83 16h8.341c.757 0 1.135 0 1.458.166c.324.166.544.474.983 1.09l1.13 1.581c.99 1.386 1.484 2.078 1.205 2.62c-.28.543-1.13.543-2.833.543H12m0-20H5.886c-1.702 0-2.553 0-2.832.542c-.28.543.215 1.235 1.205 2.62l1.13 1.582c.439.616.659.924.982 1.09S7.073 8 7.83 8h8.341c.757 0 1.135 0 1.458-.166c.324-.166.544-.474.983-1.09l1.13-1.582c.99-1.385 1.484-2.077 1.205-2.62C20.666 2 19.816 2 18.113 2h-2.056M14 12h-4m-4 0H2m20 0h-4"></svg:path>`,
})
export class SolarFlipVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalLineDuotoneIcon],svg[solar-flip-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.886 2h12.228c1.702 0 2.553 0 2.832.542c.28.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.982 1.09C17.306 8 16.927 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166s-.543-.474-.983-1.09l-1.13-1.582c-.988-1.385-1.483-2.077-1.204-2.62C3.334 2 4.184 2 5.886 2Zm0 20h12.228c1.702 0 2.553 0 2.832-.542c.28-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.982-1.09C17.306 16 16.927 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166s-.543.474-.983 1.09l-1.13 1.581c-.988 1.386-1.483 2.078-1.204 2.62S4.184 22 5.886 22Z"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m4 0h4M2 12h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlipVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalLinearIcon],svg[solar-flip-vertical-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.886 2h12.227c1.703 0 2.554 0 2.833.542c.279.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.983 1.09S16.928 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166s-.543-.474-.983-1.09l-1.13-1.582c-.989-1.385-1.483-2.077-1.204-2.62C3.333 2 4.184 2 5.886 2Zm0 20h12.227c1.703 0 2.554 0 2.833-.542c.279-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.983-1.09S16.928 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166s-.543.474-.983 1.09l-1.13 1.581c-.989 1.386-1.483 2.078-1.204 2.62S4.184 22 5.886 22Z"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m4 0h4M2 12h4"></svg:path></svg:g>`,
})
export class SolarFlipVerticalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalOutlineIcon],svg[solar-flip-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.826 1.25h12.348c.8 0 1.483 0 1.999.076c.525.077 1.128.268 1.44.873c.311.606.116 1.207-.127 1.68c-.237.463-.635 1.02-1.1 1.67l-1.181 1.655c-.205.287-.387.542-.56.743a2.2 2.2 0 0 1-.673.554c-.277.142-.556.2-.842.225c-.264.024-.577.024-.93.024H7.8c-.353 0-.666 0-.93-.024a2.2 2.2 0 0 1-.842-.225a2.2 2.2 0 0 1-.673-.554c-.173-.201-.354-.456-.56-.743L3.65 5.598l-.035-.048c-.465-.651-.863-1.208-1.1-1.671c-.243-.473-.439-1.074-.127-1.68s.915-.796 1.44-.873c.516-.076 1.2-.076 2-.076M3.702 2.909l.01-.01zm.027-.02c.04-.02.13-.052.317-.08c.392-.057.964-.059 1.84-.059h12.228c.876 0 1.447.002 1.84.06a1.1 1.1 0 0 1 .317.08a1.1 1.1 0 0 1-.12.304c-.18.353-.51.82-1.02 1.533L18 6.307a10 10 0 0 1-.493.661a.8.8 0 0 1-.223.199a.8.8 0 0 1-.29.065a10 10 0 0 1-.825.018H7.83c-.392 0-.637 0-.825-.018a.8.8 0 0 1-.29-.065a.8.8 0 0 1-.223-.199A10 10 0 0 1 6 6.308L4.87 4.727c-.51-.714-.84-1.18-1.02-1.533a1.1 1.1 0 0 1-.12-.304m16.569.02l-.01-.01zm-.025-.039l-.002-.013q.002-.001.002.013m-16.546 0q0-.015.002-.013zM1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M7.8 15.25h8.4c.353 0 .666 0 .93.024c.286.026.565.083.842.225s.485.337.673.554c.173.201.355.456.56.743l1.181 1.655c.465.65.863 1.207 1.1 1.67c.243.473.438 1.074.127 1.68c-.312.605-.915.796-1.44.873c-.516.076-1.2.076-2 .076H5.827c-.8 0-1.483 0-1.999-.076c-.525-.077-1.128-.268-1.44-.873c-.312-.606-.116-1.207.126-1.68c.238-.463.636-1.02 1.1-1.67l1.165-1.63l.017-.025c.206-.287.387-.542.56-.742c.187-.218.396-.412.673-.555c.277-.142.556-.2.842-.225c.264-.024.577-.024.93-.024m-.795 1.518a.8.8 0 0 0-.29.065a.8.8 0 0 0-.223.199a10 10 0 0 0-.493.66l-1.13 1.581c-.51.714-.84 1.18-1.02 1.533c-.087.168-.113.26-.12.304c.04.02.13.053.317.08c.392.058.964.06 1.84.06h12.228c.876 0 1.447-.002 1.84-.06a1.1 1.1 0 0 0 .317-.08a1.1 1.1 0 0 0-.12-.304c-.18-.353-.51-.82-1.02-1.533L18 17.694a10 10 0 0 0-.493-.661a.8.8 0 0 0-.223-.199a.8.8 0 0 0-.29-.065a10 10 0 0 0-.825-.018H7.83c-.392 0-.637 0-.825.018m13.266 4.375l.002-.013q0 .015-.002.013m.017-.043l.01-.009zm-16.586-.009l.01.01zm.025.039l.002.013q-.002.001-.002-.013" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampBoldIcon],svg[solar-floor-lamp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.747 3.062l-3.593-.019A2.04 2.04 0 0 1 11.947 2a2.08 2.08 0 0 1 1.8 1.062m-.997 3.972a3.05 3.05 0 0 0 2.123-1.96c.184-.534-.295-1.008-.862-1.011l-4.114-.021c-.568-.003-1.043.466-.855 1.003a3.13 3.13 0 0 0 2.208 1.999v6.363a5 5 0 0 0-.387-.334l-.011-.01l-3.887-2.777l-.076-.057a3.13 3.13 0 0 0-.26-2.836c-.305-.48-.968-.398-1.318.05L2.78 10.685c-.35.447-.274 1.117.26 1.304a3.05 3.05 0 0 0 2.97-.546l.07.053l3.876 2.77a3.39 3.39 0 0 1 1.295 2.637v4.347H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-4.313a3.39 3.39 0 0 1 1.295-2.67l3.876-2.77l.131-.1a3.05 3.05 0 0 0 3.022.592c.534-.187.61-.857.26-1.305l-2.532-3.241c-.35-.448-1.013-.53-1.318-.05a3.13 3.13 0 0 0-.285 2.77l-.164.123l-3.887 2.778l-.012.009a5 5 0 0 0-.386.334zM2.157 9.857l2.212-2.831a2.04 2.04 0 0 0-1.93.76a2.08 2.08 0 0 0-.282 2.07m17.588-2.83l2.211 2.83a2.08 2.08 0 0 0-.282-2.07a2.04 2.04 0 0 0-1.93-.76"></svg:path>`,
})
export class SolarFloorLampBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampBoldDuotoneIcon],svg[solar-floor-lamp-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a3 3 0 0 0 2.835-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.017.46-.836.982A3 3 0 0 0 12 7"></svg:path><svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m6.455 10.98l.067-.09a3.12 3.12 0 0 0 .107-3.497c-.305-.48-.968-.398-1.318.05L2.78 10.684c-.35.448-.274 1.118.26 1.305c1.2.42 2.585.055 3.416-1.01"></svg:path><svg:path fill="currentColor" d="M2.439 7.786a2.033 2.033 0 0 1 2.872-.343L2.78 10.684a2.076 2.076 0 0 1-.34-2.898" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.545 10.98l-.067-.09a3.12 3.12 0 0 1-.107-3.497c.305-.48.968-.398 1.318.05l2.532 3.241c.35.448.274 1.118-.26 1.305c-1.2.42-2.585.055-3.416-1.01"></svg:path><svg:path fill="currentColor" d="M21.561 7.786a2.033 2.033 0 0 0-2.872-.343l2.532 3.241a2.076 2.076 0 0 0 .34-2.898" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 7q.387 0 .745-.093q.005.045.005.093v6.407q.184-.178.387-.334l.012-.01l3.94-2.892a3.1 3.1 0 0 0 .856 1.232l-3.9 2.864a3.39 3.39 0 0 0-1.294 2.67v4.313h-1.5v-4.347a3.39 3.39 0 0 0-1.296-2.636l-3.9-2.864a3.1 3.1 0 0 0 .856-1.232l3.941 2.893l.012.009q.203.157.386.334V7a1 1 0 0 1 .006-.093q.358.092.744.093m-.002 15.75h.005z" opacity=".55"></svg:path>`,
})
export class SolarFloorLampBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampBrokenIcon],svg[solar-floor-lamp-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 18v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 10.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063c0-1.282.59-2.49 1.597-3.272l3.881-2.774m3.743-.207l-2.532-3.241m2.532 3.241c.35.448.274 1.118-.26 1.305a3.05 3.05 0 0 1-3.483-1.098m3.743-.207a2.076 2.076 0 0 0 .34-2.898a2.033 2.033 0 0 0-2.872-.343m0 0c-.35-.448-1.013-.53-1.318-.05a3.12 3.12 0 0 0 .107 3.498M9 22h6m-3 0v-9m0-6v3"></svg:path><svg:path d="M12 7a3 3 0 0 0 2.836-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.016.46-.836.982A3 3 0 0 0 12 7Zm0-5a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"></svg:path></svg:g>`,
})
export class SolarFloorLampBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampLineDuotoneIcon],svg[solar-floor-lamp-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0V7"></svg:path><svg:path d="M12 7a3 3 0 0 0 2.836-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.016.46-.836.982A3 3 0 0 0 12 7Z"></svg:path><svg:path d="M10 4a2 2 0 1 1 4 0" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 10.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063c0-1.282.59-2.49 1.597-3.272l3.881-2.774m3.743-.207l-2.532-3.241m2.532 3.241c.35.448.274 1.118-.26 1.305a3.05 3.05 0 0 1-3.483-1.098m3.743-.207a2.076 2.076 0 0 0 .34-2.898a2.033 2.033 0 0 0-2.872-.343m0 0c-.35-.448-1.013-.53-1.318-.05a3.12 3.12 0 0 0 .107 3.498" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFloorLampLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampLinearIcon],svg[solar-floor-lamp-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0V7"></svg:path><svg:path d="M12 7a3 3 0 0 0 2.835-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.017.46-.836.982A3 3 0 0 0 12 7Zm0-5a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 10.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063c0-1.282.59-2.49 1.597-3.272l3.881-2.774m3.743-.207l-2.532-3.241m2.532 3.241c.35.448.274 1.118-.26 1.305a3.05 3.05 0 0 1-3.483-1.098m3.743-.207a2.076 2.076 0 0 0 .34-2.898a2.033 2.033 0 0 0-2.872-.343m0 0c-.35-.448-1.013-.53-1.318-.05a3.12 3.12 0 0 0 .107 3.498"></svg:path></svg:g>`,
})
export class SolarFloorLampLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticBoldIcon],svg[solar-floor-lamp-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.599 3C14.08 2.402 13.11 2 12 2s-2.08.402-2.599 1zm-1.85 4.955c1.998-.24 3.61-1.426 4.099-2.97C17.014 4.457 16.552 4 16 4H8c-.552 0-1.014.458-.847.984c.488 1.545 2.1 2.731 4.098 2.971L11.25 8v6.407a5 5 0 0 0-.387-.334l-.011-.01l-3.887-2.777l-.076-.057a3.13 3.13 0 0 0-.26-2.836c-.305-.48-.968-.398-1.318.05L2.78 11.685c-.35.447-.274 1.117.26 1.304a3.05 3.05 0 0 0 2.97-.546l.07.053l3.876 2.77a3.39 3.39 0 0 1 1.295 2.637v3.347H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25V8l-.002-.045M2.157 10.857l2.212-2.831a2.04 2.04 0 0 0-1.93.76a2.08 2.08 0 0 0-.282 2.07"></svg:path>`,
})
export class SolarFloorLampMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticBoldDuotoneIcon],svg[solar-floor-lamp-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8"></svg:path><svg:path fill="currentColor" d="M12 2c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m6.455 11.98l.067-.09a3.12 3.12 0 0 0 .107-3.497c-.305-.48-.968-.398-1.318.05L2.78 11.684c-.35.448-.274 1.118.26 1.305c1.2.42 2.585.055 3.416-1.01"></svg:path><svg:path fill="currentColor" d="M12 8q.383 0 .75-.045V21.25h-1.5v-3.347a3.39 3.39 0 0 0-1.295-2.636l-3.9-2.863a3.1 3.1 0 0 0 .856-1.233l3.94 2.893l.012.009q.204.158.387.334V7.955Q11.617 8 12 8m-9.561.786a2.033 2.033 0 0 1 2.872-.343L2.78 11.684a2.076 2.076 0 0 1-.34-2.898" opacity=".5"></svg:path>`,
})
export class SolarFloorLampMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticBrokenIcon],svg[solar-floor-lamp-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0v-9m0-5v2"></svg:path><svg:path d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8Zm0-6c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 11.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"></svg:path></svg:g>`,
})
export class SolarFloorLampMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticLineDuotoneIcon],svg[solar-floor-lamp-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0V8"></svg:path><svg:path d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8Z"></svg:path><svg:path d="M12 2c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 19v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 11.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFloorLampMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticLinearIcon],svg[solar-floor-lamp-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0V8"></svg:path><svg:path d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8Zm0-6c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 11.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"></svg:path></svg:g>`,
})
export class SolarFloorLampMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticOutlineIcon],svg[solar-floor-lamp-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.463 1.962c.682-.455 1.581-.712 2.537-.712s1.855.257 2.537.712c.472.314.876.753 1.077 1.288H16c.478 0 .936.197 1.249.54c.324.358.485.878.314 1.42c-.606 1.915-2.55 3.255-4.813 3.5v12.54H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-3.313a3.39 3.39 0 0 0-1.295-2.67l-3.322-2.375a3.8 3.8 0 0 1-3.842.805a1.44 1.44 0 0 1-.952-1.137a1.7 1.7 0 0 1 .038-.72a2.83 2.83 0 0 1-.029-3.515a2.785 2.785 0 0 1 3.405-.8a1.64 1.64 0 0 1 .684-.203a1.43 1.43 0 0 1 1.325.669c.696 1.095.8 2.49.25 3.686l3.34 2.387l.011.009q.204.158.387.334V8.71c-2.263-.245-4.207-1.585-4.812-3.5a1.44 1.44 0 0 1 .313-1.42A1.7 1.7 0 0 1 8 3.25h.386c.201-.535.605-.974 1.077-1.288m.774 1.288h3.526l-.058-.04c-.403-.27-1.004-.46-1.705-.46s-1.302.19-1.705.46zM8 4.75a.23.23 0 0 0-.123.036C8.315 6.118 9.915 7.25 12 7.25s3.685-1.132 4.123-2.464l-.032-.018A.2.2 0 0 0 16 4.75zM4.118 8.752a1.29 1.29 0 0 0-1.088.496a1.33 1.33 0 0 0-.227 1.188zm1.862.086a.3.3 0 0 0-.078.067L3.37 12.146a.3.3 0 0 0-.047.095a.2.2 0 0 0-.007.05a2.3 2.3 0 0 0 2.599-.84a2.37 2.37 0 0 0 .099-2.628z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFloorLampMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampOutlineIcon],svg[solar-floor-lamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.318 3.39a2.751 2.751 0 0 1 5.364 0c.216.092.41.229.568.403c.325.361.483.888.294 1.434a3.76 3.76 0 0 1-2.794 2.448v5.732a5 5 0 0 1 .387-.334l.011-.01l3.34-2.386a3.88 3.88 0 0 1 .25-3.686a1.43 1.43 0 0 1 1.325-.67c.24.017.473.088.684.205a2.785 2.785 0 0 1 3.405.799a2.83 2.83 0 0 1-.03 3.516c.065.234.08.48.04.719a1.44 1.44 0 0 1-.953 1.137a3.8 3.8 0 0 1-3.842-.805l-3.322 2.375a3.39 3.39 0 0 0-1.295 2.67v4.313H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-4.313a3.39 3.39 0 0 0-1.295-2.67l-3.322-2.375a3.8 3.8 0 0 1-3.842.805a1.44 1.44 0 0 1-.952-1.137a1.7 1.7 0 0 1 .038-.72a2.83 2.83 0 0 1-.029-3.515a2.785 2.785 0 0 1 3.405-.8a1.64 1.64 0 0 1 .684-.203a1.43 1.43 0 0 1 1.325.669c.696 1.095.8 2.49.25 3.686l3.34 2.387l.011.009q.204.158.387.334V7.675a3.76 3.76 0 0 1-2.794-2.448a1.42 1.42 0 0 1 .294-1.434c.157-.174.352-.31.568-.403M11 3.25h2a1.248 1.248 0 0 0-2 0M4.118 7.752a1.29 1.29 0 0 0-1.088.496a1.33 1.33 0 0 0-.227 1.188zm17.079 1.684c.115-.395.045-.84-.227-1.188a1.29 1.29 0 0 0-1.088-.496zM9.888 4.779a2.251 2.251 0 0 0 4.224 0l-.021-.01A.2.2 0 0 0 14 4.75h-4a.23.23 0 0 0-.112.029M5.98 7.838a.3.3 0 0 0-.078.067L3.37 11.146a.3.3 0 0 0-.047.095a.2.2 0 0 0-.007.05a2.3 2.3 0 0 0 2.599-.84a2.37 2.37 0 0 0 .099-2.628zm12.006-.015a2.37 2.37 0 0 0 .15 2.695a2.3 2.3 0 0 0 2.548.773a.2.2 0 0 0-.007-.05a.3.3 0 0 0-.047-.095l-2.532-3.241a.26.26 0 0 0-.112-.082" clip-rule="evenodd"></svg:path>`,
})
export class SolarFloorLampOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogBoldIcon],svg[solar-fog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.762 7.647C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353a5.57 5.57 0 0 1-.808 2.897H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.271A4.2 4.2 0 0 1 2 13.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarFogBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogBoldDuotoneIcon],svg[solar-fog-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .522.096 1.023.271 1.485h18.92A5.57 5.57 0 0 0 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 15.249a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path>`,
})
export class SolarFogBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogBrokenIcon],svg[solar-fog-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.353c0 1.39-.508 2.663-1.351 3.647M14.38 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path stroke-linejoin="round" d="M8 22h8M5 19h6m8 0h-4M2 16h20"></svg:path></svg:g>`,
})
export class SolarFogBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogLineDuotoneIcon],svg[solar-fog-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 1.39-.508 2.663-1.351 3.647" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M8 22h8"></svg:path><svg:path stroke-linejoin="round" d="M5 19h14" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M2 16h20"></svg:path></svg:g>`,
})
export class SolarFogLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogLinearIcon],svg[solar-fog-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 1.39-.508 2.663-1.351 3.647"></svg:path><svg:path stroke-linejoin="round" d="M8 22h8M5 19h14M2 16h20"></svg:path></svg:g>`,
})
export class SolarFogLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogOutlineIcon],svg[solar-fog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486c0 .532.12 1.035.336 1.485h17.203a4.83 4.83 0 0 0 .961-2.897c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.5 6.5 0 0 1 3.024-.305a4.96 4.96 0 0 0-4.682-3.264m6.355 3.721c-.559-2.977-3.197-5.221-6.355-5.221c-3.562 0-6.464 2.856-6.464 6.397q0 .582.102 1.135c-2.694.09-4.864 2.278-4.864 4.983c0 .577.1 1.132.282 1.649A.749.749 0 0 0 2 16.75h20a.75.75 0 0 0 .05-1.498c.447-.87.7-1.856.7-2.9c0-2.643-1.619-4.904-3.919-5.88M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2BoldIcon],svg[solar-folder-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95v2.3h19.953c-.072-1.049-.256-1.737-.723-2.256a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257m19.928 5.492H2V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolder2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2BoldDuotoneIcon],svg[solar-folder-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202l-.002-1.048L22 10H2v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14"></svg:path><svg:path fill="currentColor" d="m11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V10h20l-.047-.75c-.072-1.049-.256-1.737-.723-2.256a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4" opacity=".5"></svg:path>`,
})
export class SolarFolder2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2BrokenIcon],svg[solar-folder-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 11H2m20 .798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path>`,
})
export class SolarFolder2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2LineDuotoneIcon],svg[solar-folder-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 11H2" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolder2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
